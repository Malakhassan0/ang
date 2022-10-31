import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
    isLoaded:boolean=false
    img= this._data.imgUrl
    books:any[] = []
    cats:any []=[]
    
  constructor(private _data: DataService) { 
    this.getData()
    // this.getcats()

  }

  ngOnInit(): void {
  }
  getData(){
    this._data.getAllBooks().subscribe(
      res=> {
        this.books= res.data
        this.isLoaded=true
      },
      err=>{
        this.isLoaded=false
      },
      ()=>{
        console.log("done")
      }
    )
  }
  // getcats(){
  //   this._data.getCategories().subscribe(
  //    res=>{
  //     this.cats= res.data.category
  //     // console.log(res.data)
  //    },
  //    e=>{
  //      console.log(e.error.message)
  //    },
  //    ()=>{
  //      console.log("done")
 
  //    }
  //   )
  //  }
 

}
