import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

import { AuthGuard } from './core/services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'detail/:id', component: HeroDetailComponent,  canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'logout', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
