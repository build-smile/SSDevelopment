import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceSliderComponent } from './home/service-slider/service-slider.component';
import { OurclientComponent } from './home/ourclient/ourclient.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ECatalogComponent } from './e-catalog/e-catalog.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServiceSliderComponent,
    OurclientComponent,
    PortfolioComponent,
    ECatalogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
