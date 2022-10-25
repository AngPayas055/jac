import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesRoutingActivate } from './modules-routing.activate';
import { ModulesComponent } from './modules.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    DashboardComponent,
    ModulesComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [
    ModulesRoutingActivate,
  ]
})
export class ModulesModule { }
