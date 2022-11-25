// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router Modules
import { LandingRoutingModule } from './landing-routing.module';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// Flex Layout
// import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    // FlexLayoutModule
  ]
})
export class LandingModule { }
