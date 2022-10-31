import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  img= this._data.imgUrl
      cat:any
      single:any ={
        id: 0,
   title: "",
   content: "",
   price: 0,
   bookImg: "",
   // rating: Number
   author: "",
   category: "",
   // publisher?: ""
   // images: string[]
   // createdAt?:""
   // updatedAt?:""
   }
  constructor(private _data: DataService , private  _activated:ActivatedRoute){ }

  ngOnInit(): void {
  }
  getcat(){
    this._data.getCategory(this.cat=this._activated.snapshot.params['cat']).subscribe(
      res=>{
       this.single= res.data
       // console.log(res.data)
      },
      e=>{
        console.log(e.error.message)
      },
      ()=>{
        console.log("done")
      }
     )
  }

}
