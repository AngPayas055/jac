import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesRoutingActivate } from './modules-routing.activate';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  providers: [
    ModulesRoutingActivate,
  ]
})
export class ModulesModule { }
