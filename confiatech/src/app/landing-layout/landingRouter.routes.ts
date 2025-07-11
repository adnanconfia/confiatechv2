import { AiSolutionsComponent } from './../pages/service-page/ai-solutions/ai-solutions.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { LandingLayoutComponent } from './landing-layout.component';

export const LandingRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-layout.component').then(
        (mod) => mod.LandingLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pages/landing/landing.component').then(
            (mod) => mod.LandingComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../pages/about-page/about-page.component').then(
            (mod) => mod.AboutPageComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../pages/contact-page/contact-page.component').then(
            (mod) => mod.ContactPageComponent
          ),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('../pages/portfolio-page/portfolio-page.component').then(
            (mod) => mod.PortfolioPageComponent
          ),
      },
      {
        path: 'portfolio/details/:id',
        loadComponent: () =>
          import(
            '../pages/portfolio-page/portfolio-details/portfolio-details.component'
          ).then((mod) => mod.PortfolioDetailsComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('../pages/service-page/service-page.component').then(
            (mod) => mod.ServicePageComponent
          ),
      },
      {
        path: 'services/frontend-development',
        loadComponent: () =>
          import(
            '../pages/service-page/fe-development/fe-development.component'
          ).then((mod) => mod.FEDevelopmentComponent),
      },
      {
        path: 'services/backend-development',
        loadComponent: () =>
          import(
            '../pages/service-page/be-development/be-development.component'
          ).then((mod) => mod.BeDevelopmentComponent),
      },
      {
        path: 'services/mobile-app-development',
        loadComponent: () =>
          import(
            '../pages/service-page/mobile-development/mobile-development.component'
          ).then((mod) => mod.MobileDevelopmentComponent),
      },
      {
        path: 'services/ui-ux-designing',
        loadComponent: () =>
          import(
            '../pages/service-page/ui-designing/ui-designing.component'
          ).then((mod) => mod.UiDesigningComponent),
      },
      {
        path: 'services/graphic-designing',
        loadComponent: () =>
          import('../pages/service-page/graphics/graphics.component').then(
            (mod) => mod.GraphicsComponent
          ),
      },
      {
        path: 'services/devops',
        loadComponent: () =>
          import('../pages/service-page/devops/devops.component').then(
            (mod) => mod.DevopsComponent
          ),
      },
      {
        path: 'services/customized-solutions',
        loadComponent: () =>
          import(
            '../pages/service-page/customized-software/customized-software.component'
          ).then((mod) => mod.CustomizedSoftwareComponent),
      },
      {
        path: 'services/ai-solutions',
        loadComponent: () =>
          import(
            '../pages/service-page/ai-solutions/ai-solutions.component'
          ).then((mod) => mod.AiSolutionsComponent),
      },

      // {path: 'blogs', loadComponent: () => import('../pages/blogs-page/blogs-page.component').then(mod => mod.BlogsPageComponent)},
    ],
  },
];
