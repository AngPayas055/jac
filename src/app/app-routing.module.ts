import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }