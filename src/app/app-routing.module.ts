import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { 
      path: 'login', 
      component: 
      LoginComponent 
    },
    { 
      path: '', 
      component: HomeComponent,
      pathMatch: 'full'

    },
    {
      path: '**',
      component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
