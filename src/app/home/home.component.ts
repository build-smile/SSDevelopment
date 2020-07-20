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
