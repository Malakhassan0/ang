import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
// import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  img= this._data.imgUrl
  // books:any[] = []
  id: any
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
  constructor(private _activated:ActivatedRoute, private _data:DataService) { }

  ngOnInit(): void {
this.getData()
// if(this.id> this.books.length || this.id<0 ){}
// else {
//   this.single = this.books[this.id]
// }
  }
  getData(){
    this._data.getSinglebook(this.id=this._activated.snapshot.params['id']).subscribe(
      res=> {
        this.single= res.data
      },
      err=>{

      },
      ()=>{
        console.log('done')
      }
    )
  }

}
