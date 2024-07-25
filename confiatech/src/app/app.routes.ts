import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {path: '',redirectTo:'home',pathMatch:'full'},
    {path: 'home', loadComponent: () => import('./pages/landing/landing.component').then(mod => mod.LandingComponent)},
    {path: 'services', loadComponent: () => import('./pages/service-page/service-page.component').then(mod => mod.ServicePageComponent)},

];
