import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesRoutingActivate } from './modules-routing.activate';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', canActivate: [ModulesRoutingActivate], component: ModulesComponent },
      { path: 'dashboard', canActivate: [ModulesRoutingActivate], component: DashboardComponent }
    ]
    // children: [
    //   { path: 'dashboard', canActivate: [ModulesRoutingActivate], component: DashboardComponent },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
