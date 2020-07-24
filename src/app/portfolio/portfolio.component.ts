import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  Banner =
  ['./assets/image/slide/1.jpg',
  './assets/image/slide/2.jpg',
  './assets/image/slide/3.jpg',
  './assets/image/slide/4.jpg',
  './assets/image/slide/5.jpg',
  './assets/image/slide/6.png',
  './assets/image/slide/7.png',
  './assets/image/slide/8.jpg',
  './assets/image/slide/9.jpg',
  './assets/image/slide/10.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
