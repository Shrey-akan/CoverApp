import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent {
shoeImages : Boolean = false;

showMoreImage(){
  this.shoeImages=!this.shoeImages;
}
}
