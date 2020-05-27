import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
//it provides metadeata about component
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//class, which handels functionality of the components.
export class ProductAlertsComponent implements OnInit {

  
  
  //passing the property value
@Input() product;

//Imported Output and EventEmitter on the top of the file.
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}