import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {

  images = [
    {path: '../../../assets/image/service/webicon1.png'}, {path: '../../../assets/image/service/webicon2.png'}];
  cardImg1 = [
    {
      name: 'ตกแต่งภายในครบวงจร' , eng: 'Turnkey',      desc: `เนื่องจากทางบริษัทเป็นโรงงานผู้ผลิตที่มีบุคลากรมากด้วยประสบการณ์ จึงดูแลงานได้ตั้งแต่การออกแบบเขียนแบบ อีกทั้งยังมีทีมช่างที่ครอบคลุมตั้งแต่งานระบบไฟฟ้า-ประปา งานปูน งานโลหะ งานกระจก งานไม้ งานสี จึงทำให้บริษัทสามารถควบคุมกระบวนการผลิตไปจนถึงขั้นตอนการติดตั้งได้อย่างครบจบวงจร
      `, img: '../../../assets/image/service/webicon1.png' ,
      backimg: `url('../../../assets/image/banner3.jpg');`
    },
    {
      name: 'มืออาชีพ',            eng: 'Professional', desc: `การันตีด้วยประสบการณ์การทำงานกว่า 30 ปี ของ SS DEVELOPMENT พร้อมด้วยทีมช่างผู้เชี่ยวชาญ อีกทั้งยังมีประสบการณ์ในการร่วมงานกับภาครัฐและเอกชนชั้นนำของประเทศ`, img: '../../../assets/image/service/webicon2.png',
       backimg:  `url('../../../assets/image/banner3.jpg');`
      },
    {
      name: 'ปลอดภัย',            eng: 'Safety',       desc:`บริษัทให้ความสำคัญในการดำเนินการตามนโยบายด้านความปลอดภัยเป็นมาตรฐานสูงสุด โดยมีระบบมาตรฐานความปลอดภัยในการปฏิบัติงาน เพื่อป้องกันอุบัติเหตุที่จะเกิดขึ้นกับผู้ที่เกี่ยวข้อง รวมไปถึงพนักงานของบริษัททุกคน
      `, img: '../../../assets/image/service/webicon3.png',
      backimg: `url('../../../assets/image/banner3.jpg');`},
    {
      name: 'ใส่ใจ',               eng: 'Attention',    desc:`SS Development คำนึงถึงความปลอดภัยของผู้บริโภค โดยเลือกใช้วัสดุแผ่นไม้มาตรฐาน E1 ( European Standard Class1 ) ซึ่งเป็นแผ่นไม้ที่ปลอดสารฟอร์มาลดีไฮด์ และได้รับการรับรองผ่านมาตรฐานจากยุโรป`, img: '../../../assets/image/service/webicon4.png',
    backimg: `url('../../../assets/image/banner3.jpg');`
  },
  {
    name: 'ผลงานจริง',
    eng: 'Success',
    desc: `มั่นใจด้วยผลงานจริงที่สร้างสรรค์อย่างพิถีพิถัน จากห้างสรรพสินค้าชั้นนำ มหาวิทยาลัย โรงแรมรีสอร์ท โรงพยาบาล ออฟฟิศสำนักงาน ร้านค้าร้านอาหาร โครงการบ้านพักอาศัยและคอนโดมิเนียม ฯลฯ`,
    img: '../../../assets/image/service/webicon5.png',
    backimg:  `url('../../../assets/image/banner3.jpg');`
  }
  ,
  {
    name: 'รักษาสิ่งแวดล้อม',
    eng: 'Environmental Conservation',
    desc: `บริษัทมีวิสัยทัศน์ที่จะช่วยลดทรัพยากรธรรมชาติ โดยเลือกใช้วัสดุคุณภาพที่มีส่วนช่วยในการรักษาสิ่งแวดล้อม`,
    img: '../../../assets/image/service/webicon6.png',
    backimg:  `url('../../../assets/image/banner3.jpg');`
  },
  {
    name: 'วัสดุอุปกรณ์คุณภาพ',
    eng: 'High Quantity Equipment',
    desc: `บริษัทเลือกใช้ Furniture Fittings คุณภาพจาก HAFELE ที่ได้รับรองการยอมรับมาตรฐานเทคโนโลยีจากเยอรมนี รวมไปถึงเลือกใช้วัสดุคุณภาพเพื่อให้ชิ้นงานออกมาอย่างสมบูรณ์แบบและได้มาตรฐาน
    `,   img: '../../../assets/image/service/webicon7.png',
    backimg:  `url('../../../assets/image/banner3.jpg');`
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
