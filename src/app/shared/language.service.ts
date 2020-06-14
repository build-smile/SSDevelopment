import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import {Language} from 'src/app/shared/language.model';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  languageUrl = 'https://ssdevelopment.co.th/api/getLanguage.php';

  getLanguage(languageCode: string, pageCode: string): Observable<Language[]> {
    this.languageUrl += `?Language_Code=${languageCode}&PageCode=${pageCode}`;
    return this.http.get<Language[]>(this.languageUrl);
  }
  initLanguage(): string {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'th');
    }
    return localStorage.getItem('language');

  }
}
