// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router Modules
import { SecurityRoutingModule } from './security-routing.module';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Flex Layout
// import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { SecurityComponent } from './security.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
    // FlexLayoutModule
  ]
})
export class SecurityModule { }
