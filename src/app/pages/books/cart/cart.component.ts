import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  


  constructor(private _auth:DataService) { }
  
    ngOnInit(): void {
    
    }
    
  }
