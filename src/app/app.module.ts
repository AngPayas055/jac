import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { MatIconModule } from '@angular/material/icon';
// import { LandingComponent } from './landing/landing.component';
// import { HomeComponent } from './landing/home/home.component'; 
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
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    MatButtonToggleModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    })
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
