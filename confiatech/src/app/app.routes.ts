import { Routes } from '@angular/router';

export const routes: Routes = [ 
 
    {path: '',   loadChildren: () => import('./landing-layout/landingRouter.routes').then(routes => routes.LandingRoutes)},
    {path: 'custom-web-apps', loadComponent: () => import('./pages/private-landing/private-landing.component').then(mod => mod.PrivateLandingComponent)},
    {
        path:"**",

     loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent)
    }
];
