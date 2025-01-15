import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {path: '', loadComponent: () => import('./pages/landing/landing.component').then(mod => mod.LandingComponent)},
    {path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(mod => mod.AboutPageComponent)},
    {path: 'portfolio', loadComponent: () => import('./pages/portfolio-page/portfolio-page.component').then(mod => mod.PortfolioPageComponent)},
    {path: 'portfolio/details/:id', loadComponent: () => import('./pages/portfolio-page/portfolio-details/portfolio-details.component').then(mod => mod.PortfolioDetailsComponent)},
    {path: 'services', loadComponent: () => import('./pages/service-page/service-page.component').then(mod => mod.ServicePageComponent)},
    {path: 'services/fe-development', loadComponent: () => import('./pages/service-page/fe-development/fe-development.component').then(mod => mod.FEDevelopmentComponent)},
    {path: 'services/be-development', loadComponent: () => import('./pages/service-page/be-development/be-development.component').then(mod => mod.BeDevelopmentComponent)},
    {path: 'services/mobile-app-development', loadComponent: () => import('./pages/service-page/mobile-development/mobile-development.component').then(mod => mod.MobileDevelopmentComponent)},
    {path: 'services/ui-ux-designing', loadComponent: () => import('./pages/service-page/ui-designing/ui-designing.component').then(mod => mod.UiDesigningComponent)},
    {path: 'services/graphic-designing', loadComponent: () => import('./pages/service-page/graphics/graphics.component').then(mod => mod.GraphicsComponent)},
    {path: 'services/devops', loadComponent: () => import('./pages/service-page/devops/devops.component').then(mod => mod.DevopsComponent)},

    {path: 'blogs', loadComponent: () => import('./pages/blogs-page/blogs-page.component').then(mod => mod.BlogsPageComponent)},

];
