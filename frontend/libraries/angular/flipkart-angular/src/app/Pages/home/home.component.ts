import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:string
img2:string
img3:string
img4:string
img5:string
img6:string
title1:string
title2:string
title3:string
title4:string
title5:string
title6:string

constructor(){
  this.img1='../../../assets/images/1.jpg'
  this.img2='../../../assets/images/2.jpg'
  this.img3='../../../assets/images/3.jpg'
  this.img4='../../../assets/images/4.jpg'
  this.img5='../../../assets/images/5.jpg'
  this.img6='../../../assets/images/6.jpg'
  this.title1="Horizon Forbidden Zero Dawn"
  this.title2="Watch Dogs Legion"
  this.title3="Just Cause 4"
  this.title4="AC Vahlala"
  this.title5="God Of War Ragnarork"
  this.title6="Spider Man"
}
}
