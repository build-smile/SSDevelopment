import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../shared/language.service';
import { Language } from '../shared/language.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    Banner =
  [{url: './assets/image/slide/1.jpg' , content: 'การันตีด้วยผลงานจริง ที่สร้างสรรค์อย่างพิถีพิถันด้วยทีมงานของ SS DEVELOPMENT เพื่อให้งานออกมามีประสิทธิภาพสูงสุด คลิ๊กดูผลงานจริง'},
  {url: './assets/image/slide/2.jpg' , content: 'ห้างสรรพสินค้า Isetan จากประเทศญี่ปุ่น ตั้งอยู่ในพื้นที่ของศูนย์การค้า Centralworld คลิ๊กดูผลงานจริง'},
  {url:  './assets/image/slide/3.jpg', content: 'เขียนแบบด้วยโปรแกรมมาตรฐาน เรามีทีมออกแบบภาพ3Dเสมือนจริง จึงทำให้ลูกค้าเห็นภาพและรายละเอียดได้มากขึ้น เพื่อให้งานออกมาตรงตามแบบและมีคุณภาพ เพื่อสนองความพึงพอใจสูงสุดของลูกค้า'},
  {url: './assets/image/slide/4.jpg' , content: 'งานโครงการตกแต่งโชว์รูมที่นอน ห้างที่นอนถูกใจ Tookjai Mattress คลิ๊กดูผลงานจริง'},
  {url: './assets/image/slide/5.jpg' , content: 'โครงการตกแต่งปรับปรุงออฟฟิศสำนักงานบริษัท Sumitomo Corporation Thailand ตั้งอยู่ในพื้นที่ของตึกสำนักงาน All Seasons Place คลิ๊กดูผลงานจริง'},
  {url: './assets/image/slide/6.jpg' , content: ''},
  {url: './assets/image/slide/7.jpg' , content: ''}];

  languageCode: string;
  language: Language[];
  profileCompany: string;
  constructor(private languageService: LanguageService) {
    this.languageCode = this.languageService.initLanguage();
    this.getLanguage();
  }

  ngOnInit() {
  }

  getLanguage() {
    this.languageService.getLanguage(this.languageCode, 'home').subscribe(
      (language) => {
        this.language = language;
        console.log(this.language);

        console.log(this.language);
        this.profileCompany = this.language.find(i => i.Name === 'profile_company').Value;

      }
    );
  }
}
