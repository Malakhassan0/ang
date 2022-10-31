import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  img= this._auth.imgUrl
  
  constructor(public _auth:DataService,private _router:Router) { }
  ngOnInit(): void {
    this.me()
  }
  me(){
    this._auth.me().subscribe(
      res=>{
        console.log(res)
      },
      e=>{
        console.log(e.error.messagee)
        this._router.navigateByUrl("/me")
      },
      ()=>{
        console.log("done")
      }
    )
  }
  editForm  = new FormGroup({
    userName : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required , Validators.email]),
  })
  get userName(){return this.editForm.get('userName')}
  get email(){return this.editForm.get('email')}
  file:any
  isSubmitted= false
  errorMsg=''
  handleEdit(){
    // console.log(this.registerForm.value)
    let data : User|any = this.editForm.value
    this.isSubmitted=true
    if(this.editForm.valid){
      this._auth.editProfile(data).subscribe(
        res=>{
          console.log(res)
        },
        e=>{
          console.log(e.error.message)
          this.errorMsg=e.error.message
        },
        ()=>{
          console.log("finished")
          this._router.navigateByUrl('/me')
        }
      )
    }
}
  chngMyImg(event:any){
    this.file = event.target.files[0]
  }
  msg = ""
  uploadImg(){
    this.msg=""
    const myData = new FormData()
    myData.append("img", this.file, this.file.name)
    this._auth.imgUpload(myData).subscribe(
      res=> {
        console.log(res)
        this._auth.imgUpload == res.data.imgProfile
      },
      err=>{
        this.msg = "invalid image"
      },
      ()=>{
          console.log("done")
      }
    )
  }
}