import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../shared/language.service';
import {Language } from '../shared/language.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private languageService: LanguageService) { }
  languageCode: string;
  language: Language[];
  languageText = 'TH';

  homeText: string;
  aboutUsText: string;
  portfolioText: string;
  contactUsText: string;
  ngOnInit() {

    this.languageCode = this.languageService.initLanguage();
    this.getLanguage();

  }
  getLanguage() {

    if(this.languageCode === 'en'){
      this.languageText = 'TH';
    }
    else  {this.languageText = 'EN';}
    this.languageService.getLanguage(this.languageCode, 'header').subscribe(
      (language) => {
        this.language = language;
        console.log(this.language);
        this.homeText = this.language.find(i => i.Name === 'home').Value;
        this.aboutUsText = this.language.find(i => i.Name === 'aboutus').Value;
        this.portfolioText = this.language.find(i => i.Name === 'portfolio').Value;
        this.contactUsText = this.language.find(i => i.Name === 'contactus').Value;
      }
    );


  }
  switchLanguage() {
    if (localStorage.getItem('language') === 'th') {
      localStorage.setItem('language', 'en');
    } else {
      localStorage.setItem('language', 'th');
    }
    this.languageCode = localStorage.getItem('language');
    this.getLanguage();

  }
}
