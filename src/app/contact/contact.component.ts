import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showmore:boolean=false;
  showdata(){
    this.showmore=!this.showmore;
  }
}
