import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Language } from '../shared/language.model';
import { LanguageService } from '../shared/language.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private languageService: LanguageService , private http: HttpClient) { }
  languageCode: string;
  language: Language[];
  HeadOfficeAddress: string;
  HeadOfficePhone: string;
  HeadOfficeWorkDay: string;
  HeadeOffice: string;
  showroom: string;
  showroomAdress: string;
  mailUrl = 'https://ssdevelopment.co.th/api/sentMail.php';
  ngOnInit() {
    this.getLanguage();
  }

  async SentMail(formValue: any){
    console.log(formValue);
    const myHeaders = {'Content-Type': 'application/json'};
    const res = await this.http.post<string>(this.mailUrl, formValue);
    await alert(res);
  }

  getLanguage() {
    this.languageService.getLanguage(this.languageCode, 'footer').subscribe(
      (language) => {
        this.language = language;
        console.log(this.language);
        this.HeadOfficeAddress = this.language.find(i => i.Name === 'HeadOfficeAddress').Value;
        this.HeadOfficePhone = this.language.find(i => i.Name === 'HeadOfficePhone').Value;
        this.HeadOfficeWorkDay = this.language.find(i => i.Name === 'HeadOfficeWorkDay').Value;
        this.HeadeOffice = this.language.find(i => i.Name === 'HeadOffice').Value;
        this.showroom = this.language.find(i => i.Name === 'showroom').Value;
        this.showroomAdress = this.language.find(i => i.Name === 'showroomAdress').Value;

      }
    );
  }
}
