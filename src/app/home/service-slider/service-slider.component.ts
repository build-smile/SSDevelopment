import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {

  cardImg1 = [
    {
      name: 'ตกแต่งภายในครบวงจร' , eng: 'Turnkey',      desc: '', img: '../../../assets/image/service/webicon1.png' ,
      backimg: `url('../../../assets/image/banner3.jpg');`
    },
    {
      name: 'มืออาชีพ',            eng: 'Professional', desc: '', img: '../../../assets/image/service/webicon2.png',
       backimg:  `url('../../../assets/image/banner3.jpg');`
      },
    {
      name: 'ปลอดภัย',            eng: 'Safety',       desc: '', img: '../../../assets/image/service/webicon3.png',
      backimg: `url('../../../assets/image/banner3.jpg');`},
    {
      name: 'ใส่ใจ',               eng: 'Attention',    desc: '', img: '../../../assets/image/service/webicon4.png',
    backimg: `url('../../../assets/image/banner3.jpg');`
  }
  ];

  cardImg2 =
  [
    {
      name: 'ผลงานจริง',
      eng: 'Success',
      desc: '',
      img: '../../../assets/image/service/webicon5.png',
      backimg:  `url('../../../assets/image/banner3.jpg');`
    }
    ,
    {
      name: 'รักษาสิ่งแวดล้อม',
      eng: 'Environmental Conservation',
      desc: '',
      img: '../../../assets/image/service/webicon6.png',
      backimg:  `url('../../../assets/image/banner3.jpg');`
    },
    {
      name: 'วัสดุอุปกรณ์คุณภาพ',
      eng: 'High Quantity Equipment',
      desc: '',   img: '../../../assets/image/service/webicon7.png',
      backimg:  `url('../../../assets/image/banner3.jpg');`
    },
    {
      name: 'ตกแต่งภายในครบวงจร',
      eng: 'Turnkey',
      desc: '',
      img: '../../../assets/image/service/webicon1.png',
      backimg: `url('../../../assets/image/banner3.jpg');`}
  ];

  constructor() { }

  ngOnInit() {
  }

}
