import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  modelDisplay = 'none';
  srcPic = '';
  srcList =
  ['../../../assets/image/Portfolios/Other/2562_บ้านคุณอรวรรณ/001.jpg',
   '../../../assets/image/Portfolios/Other/2562_บ้านคุณอรวรรณ/002.jpg',
   '../../../assets/image/Portfolios/Other/2562_บ้านคุณอรวรรณ/003.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/1.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/2.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/3.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/4.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/5.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/6.jpg',
   '../../../assets/image/Portfolios/Other/CPLand/7.JPG',
   '../../../assets/image/Portfolios/Other/EKK/1.jpg',
   '../../../assets/image/Portfolios/Other/EKK/2.jpg',
   '../../../assets/image/Portfolios/Other/EKK/3.jpg',
   '../../../assets/image/Portfolios/Other/EKK/4.JPG',
   '../../../assets/image/Portfolios/Other/EKK/5.jpg',
   '../../../assets/image/Portfolios/Other/EKK/6.jpg',
   '../../../assets/image/Portfolios/Other/EKK/7.jpg',
   '../../../assets/image/Portfolios/Other/EKK/8.jpg',
   '../../../assets/image/Portfolios/Other/Isetan/1.jpg',
   '../../../assets/image/Portfolios/Other/Isetan/2.jpg',
   '../../../assets/image/Portfolios/Other/Isetan/3.jpg',
   '../../../assets/image/Portfolios/Other/Isetan/4.jpg',
   '../../../assets/image/Portfolios/Other/Isetan/5.JPG',
   '../../../assets/image/Portfolios/Other/Isetan/6.JPG',
   '../../../assets/image/Portfolios/Other/Isetan/7.jpg',
   '../../../assets/image/Portfolios/Other/Kumi/1.JPG',
   '../../../assets/image/Portfolios/Other/Kumi/2.JPG',
   '../../../assets/image/Portfolios/Other/Kumi/3.JPG',
   '../../../assets/image/Portfolios/Other/Kumi/4.jpg',
   '../../../assets/image/Portfolios/Other/MUIC/1.JPG',
   '../../../assets/image/Portfolios/Other/MUIC/2.JPG',
   '../../../assets/image/Portfolios/Other/MUIC/3.JPG',
   '../../../assets/image/Portfolios/Other/MUIC/4.jpg',
   '../../../assets/image/Portfolios/Other/MUIC/5.JPG',
   '../../../assets/image/Portfolios/Other/MUIC/6.jpg',
   '../../../assets/image/Portfolios/Other/MUIC/7.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/1.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/2.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/3.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/4.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/5.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/6.JPG',
   '../../../assets/image/Portfolios/Other/RoyalGames/7.jpg',
   '../../../assets/image/Portfolios/Other/RoyalGames/8.jpg',
   '../../../assets/image/Portfolios/Other/TSTech/1.jpg',
   '../../../assets/image/Portfolios/Other/TSTech/2.jpg',
   '../../../assets/image/Portfolios/Other/render/1.jpg',
   '../../../assets/image/Portfolios/Other/render/2.jpg',
   '../../../assets/image/Portfolios/Other/render/3.jpg',
   '../../../assets/image/Portfolios/Other/render/4.jpg',
   '../../../assets/image/Portfolios/Other/render/5.jpg'

  ];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  nextImg(srcString){

    let index = this.srcList.indexOf(srcString);
    if (index === this.srcList.length - 1){
      index = -1;
    }
    index++;
    this.srcPic = this.srcList[index];
  }
  prevImg(srcString){
    let index = this.srcList.indexOf(srcString);
    if (index === 0){
      index = this.srcList.length - 1;
    }
    else {
      index--;
    }
    this.srcPic = this.srcList[index];
  }

  showPictuerPopup(srcString){

    this.modelDisplay = 'block';
    this.srcPic = srcString;
    // modalImg.src = '../../../assets/image/Portfolios/Other/2562_บ้านคุณอรวรรณ/001.jpg';
    // captionText.innerHTML = this.alt;
  }
  ClosePictuerPopup(){

    this.modelDisplay = 'none';

    // modalImg.src = '../../../assets/image/Portfolios/Other/2562_บ้านคุณอรวรรณ/001.jpg';
    // captionText.innerHTML = this.alt;
  }
}
