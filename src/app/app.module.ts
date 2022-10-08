import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
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
    RouterModule,
    MatSnackBarModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
