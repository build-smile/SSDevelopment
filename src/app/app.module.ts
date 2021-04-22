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
import { DetailsComponent } from './portfolio/details/details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OurclientAdditionComponent } from './portfolio/ourclient-addition/ourclient-addition.component';
import { SampleNavbarComponent } from './sample-navbar/sample-navbar.component';




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
    DetailsComponent,
    OurclientAdditionComponent,
    SampleNavbarComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule,
    CommonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule { }
