import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {path: '', loadComponent: () => import('./pages/landing/landing.component').then(mod => mod.LandingComponent)},
    {path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(mod => mod.AboutPageComponent)},
    {path: 'services', loadComponent: () => import('./pages/service-page/service-page.component').then(mod => mod.ServicePageComponent)},
    {path: 'services/fe-development', loadComponent: () => import('./pages/service-page/fe-development/fe-development.component').then(mod => mod.FEDevelopmentComponent)},
    {path: 'services/be-development', loadComponent: () => import('./pages/service-page/be-development/be-development.component').then(mod => mod.BeDevelopmentComponent)},

];
