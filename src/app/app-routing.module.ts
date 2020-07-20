import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ECatalogComponent } from './e-catalog/e-catalog.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'ecatalog', component: ECatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
