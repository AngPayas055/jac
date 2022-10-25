import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent,DashboadAddpostDialog } from './dashboard/dashboard.component';
import { ModulesRoutingActivate } from './modules-routing.activate';
import { ModulesComponent } from './modules.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ModulesComponent,
    DashboadAddpostDialog
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ModulesRoutingActivate,
  ],
})
export class ModulesModule { }
