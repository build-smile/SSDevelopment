import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../shared/language.service';
import { Language } from '../shared/language.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  languageCode: string;
  language: Language[];
  profileCompany: string;

  constructor(private router: Router, private languageService: LanguageService) {
    this.languageCode = this.languageService.initLanguage();
    this.getLanguage();
  }

  ngOnInit() {

      window.scrollTo(0, 0);

  }

  getLanguage() {
    this.languageService.getLanguage(this.languageCode, 'aboutus').subscribe(
      (language) => {
        this.language = language;
        console.log(this.language);

        console.log(this.language);
        this.profileCompany = this.language.find(i => i.Name === 'profile_company').Value;

      }
    );
  }

}
