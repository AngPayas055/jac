import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { RouterModule } from '@angular/router';
// import { SecurityComponent } from './security/security.component';
// import { LoginComponent } from './security/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // SecurityComponent,
    // LoginComponent,
    // LandingComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
