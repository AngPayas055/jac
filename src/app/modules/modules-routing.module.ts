import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesRoutingActivate } from './modules-routing.activate';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', canActivate: [ModulesRoutingActivate], component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
