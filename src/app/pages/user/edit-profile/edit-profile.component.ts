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
  user:any
  // img= this._auth.imgUrl
  file:any
  isSubmitted= false
  errorMsg=''
  msg = ""
  
  get userName(){return this.editForm.get('userName')}
  get email(){return this.editForm.get('email')}
  constructor(public _auth:DataService,private _router:Router) { }
  ngOnInit(): void {
    this.me()
    console.log(this._auth)
  }
  me(){
    this._auth.me().subscribe(
      res=>{
        this.user = res.data

      },
      e=>{
        console.log(e.error.messagee)
        this._router.navigateByUrl("/me")
      },
      ()=>{
    
      }
    )
  }
  editForm  = new FormGroup({
    userName : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required , Validators.email]),
  })
  handleEdit(){
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
  
  uploadImg(){
    this.msg=""
    const myData = new FormData()
    myData.append("img", this.file, this.file.name)
    this._auth.imgUpload(myData).subscribe(
      res=> {
        console.log(res)
        // console.log(this._auth.userData!.imgProfile)
        // this._auth.userData.imgProfile== res.data.imgProfile
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
