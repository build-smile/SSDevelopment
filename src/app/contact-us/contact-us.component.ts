import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../shared/language.service';
import { Language } from '../shared/language.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer, private languageService: LanguageService ) { }

  headQurter = ` สำนักงานใหญ่และโรงงาน
  ที่อยู่: 29/37 หมู่2 ถนนเอกชัย-บางบอน ต.บางน้ำจืด อ.เมือง จ.สมุทรสาคร 74000
  โทรศัพท์: 034-824-398, 034-824-399
  แฟกซ์: 034494077
  อีเมล:ss_development@yahoo.com
  Line Official Account: @ssdevelopment
  เวลาทำการ: จันทร์-เสาร์ 8:00-17:00`;

  headPlace: string;
  headAddress: string;
  headPhone: string;
  headFax: string;
  headEmail: string;
  headLine = `Line Official Account: @ssdevelopment`;
  headTime: string;

  showRoomPlace: string;
  showRoomAddress: string;
  showRoomPhone: string;
  showRoomEmail: string;
  showRoomLine = 'Line Official Account: @ssfurnitureline';
  showRoomTime: string;

  ssMap = './assets/image/SSF-map.jpg';
  srcMap = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7zfLqsBnnpqj518rhD9d_cPQNZMGnM0Y&amp;callback=initMap';
  safeSrcMap: SafeResourceUrl;

  languageCode: string;
  language: Language[];


  ngOnInit() {
    this.safeSrcMap = this.domSanitizer.bypassSecurityTrustResourceUrl(this.srcMap);
    this.languageCode = this.languageService.initLanguage();
    this.getLanguage();
  }
  getLanguage() {
    this.languageService.getLanguage(this.languageCode, 'contactus').subscribe(
      (language) => {
        this.language = language;
        this.headAddress = this.language.find(i => i.Name === 'addressFactory').Value;
        this.headPlace = this.language.find(i => i.Name === 'headPlace').Value;
        this.headPhone = this.language.find(i => i.Name === 'headPhone').Value;
        this.headPhone = this.language.find(i => i.Name === 'headPhone').Value;
        this.headFax = this.language.find(i => i.Name === 'headFax').Value;
        this.headTime = this.language.find(i => i.Name === 'headTime').Value;
        this.showRoomPlace = this.language.find(i => i.Name === 'showRoomPlace').Value;
        this.showRoomAddress = this.language.find(i => i.Name === 'showRoomAddress').Value;
        this.showRoomPhone = this.language.find(i => i.Name === 'showRoomPhone').Value;
        this.showRoomEmail = this.language.find(i => i.Name === 'showRoomEmail').Value;
        this.showRoomTime = this.language.find(i => i.Name === 'showRoomTime').Value;
      }
    );
  }
}
