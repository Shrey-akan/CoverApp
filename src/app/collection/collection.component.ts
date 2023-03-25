import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  currentSlide=0;
  slides!: HTMLImageElement[];
 
  ngOnInit(): void {
    const slideEls = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    this.slides = Array.from(slideEls) as HTMLImageElement[];
    this.slides[this.currentSlide].classList.add("active");
  }
  nextSlide(){
    this.slides[this.currentSlide].classList.remove("active");
    this.currentSlide=(this.currentSlide+1) % this.slides.length;
    this.slides[this.currentSlide].classList.add("active");
  }  
  prevSlide(){
    this.slides[this.currentSlide].classList.remove("active");
    this.currentSlide=(this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].classList.add("active");
  }  

}