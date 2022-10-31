import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
        this._router.navigateByUrl("/")
      },
      ()=>{
        console.log("done")
      }
    )
  }

}
