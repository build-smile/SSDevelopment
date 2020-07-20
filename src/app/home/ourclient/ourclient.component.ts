import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourclient',
  templateUrl: './ourclient.component.html',
  styleUrls: ['./ourclient.component.css']
})
export class OurclientComponent implements OnInit {

  ourClient1 =
  ['assets/image/Ourclient/AirChina_Logo_Star.png',
   'assets/image/Ourclient/Bakeawish.jpg',
   'assets/image/Ourclient/Bangkok_Airways_logo.png',
   'assets/image/Ourclient/BBQ.jpg',
   'assets/image/Ourclient/CP-LAND.jpg',
  ];
  ourClient2 =
  [
   'assets/image/Ourclient/Isetan_logo.jpg',
   'assets/image/Ourclient/Kinokuniya.jpg',
   'assets/image/Ourclient/MUIC.png',
   'assets/image/Ourclient/Satriwit.jpg',
   'assets/image/Ourclient/Toyota-logo.png',
  ]
  constructor() { }

  ngOnInit() {


  }

}
