import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourclient',
  templateUrl: './ourclient.component.html',
  styleUrls: ['./ourclient.component.css']
})
export class OurclientComponent implements OnInit {

  ourClient1 =
  ['assets/image/home_clients/bangkokAirway.png',
   'assets/image/home_clients/BBQ.png',
   'assets/image/home_clients/CPLand.png',
   'assets/image/home_clients/isetan.png',
   'assets/image/home_clients/JBIC.png',
  ];

  ourClient =
  [
    {
      name: 'bangkok Airway',
      img: 'assets/image/home_clients/bangkokAirway.png',
    },
    {
      name: 'BBQ',
      img: 'assets/image/home_clients/BBQ.png',
    },
    {
      name: 'CPLand',
      img: 'assets/image/home_clients/CPLand.png',
    },
    {
      name: 'isetan',
      img: 'assets/image/home_clients/isetan.png',
    },
    {
      name: 'JBIC',
      img: 'assets/image/home_clients/JBIC.png',
    },
    {
      name: 'กูลิโกะ',
      img: 'assets/image/home_clients/GULICO.png',
    }
 ,
    {
      name: 'kinokuniya',
      img: 'assets/image/home_clients/kinokuniya.png',
    },
    {
      name: 'MU',
      img: 'assets/image/home_clients/MU.png',
    },
    {
      name: 'ST',
      img: 'assets/image/home_clients/ST.png',
    },
    {
      name: 'tokyu',
      img: 'assets/image/home_clients/tokyu.png',
    },
    {
      name: 'toyota',
      img: 'assets/image/home_clients/toyota.png',
    },
    {
      name: 'ISUZU',
      img: 'assets/image/home_clients/ISUZU.png',
    }

  ];

  constructor() { }

  ngOnInit() {


  }

}
