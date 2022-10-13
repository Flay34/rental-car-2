import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PromoComponent } from './promo/promo.component';
import { AllCarsSectionComponent } from './all-cars-section/all-cars-section.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './services/auth-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
const appRoutes : Routes = [
  {path: '', component: HeroSectionComponent},
  {path: 'about-section', component: AboutSectionComponent},
  {path: 'contact-section', component: ContactSectionComponent},
  {path: 'client-section', component: ClientSectionComponent},
  {path: 'gantt-chart', component: GanttChartComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MainNavbarComponent,
    HeroSectionComponent,
    PromoComponent,
    AllCarsSectionComponent,
    AuthButtonComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HomePageComponent,
    AdminSectionComponent,
    ClientSectionComponent,
    GanttChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    GanttModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-i15iafir.us.auth0.com',
      clientId: 'AScAPG8JPk5QWpQQlCfD1HRcy6Vz88gx'
    }),
     AppRoutingModule,
  ],
  providers: [HeroSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
