import { Component, OnInit,ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../shared/language.service';
import { Language } from '../shared/language.model';
import {GoogleMapsModule, MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],

})
export class ContactUsComponent implements OnInit {
  constructor(private domSanitizer: DomSanitizer, private languageService: LanguageService ) { }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
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
  infoContent = '';
  zoom = 200;
  center: google.maps.LatLngLiteral =  {lat: 13.6166293, lng: 100.3480447};
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };
  mmarker = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral = {lat: 13.6166293, lng: 100.3480447};


  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  // addMarker(event: google.maps.MouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.safeSrcMap = this.domSanitizer.bypassSecurityTrustResourceUrl(this.srcMap);
    this.languageCode = this.languageService.initLanguage();
    this.getLanguage();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 13.6166293, //position.coords.latitude,
        lng: 100.3480447, // position.coords.longitude,
      };
    });
    this.mmarker.push({
      position: {
        lat: 13.6166293, //position.coords.latitude,
        lng: 100.3480447, // position.coords.longitude,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.mmarker.length + 1),
      },
      title: 'Marker title ' + (this.mmarker.length + 1),
      info: 'Marker info ' + (this.mmarker.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
    this.openInfoWindow(this.mmarker[0]);
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
