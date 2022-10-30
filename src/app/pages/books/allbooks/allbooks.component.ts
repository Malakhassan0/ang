import { Component, OnInit } from '@angular/core';
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
    
  constructor(private _data: DataService) { 
    this.getData()

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

}
