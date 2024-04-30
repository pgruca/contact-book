import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: async () => (await import('@pages/dashboard')).routes,
  },
  {
    path: 'contact',
    loadChildren: async () => (await import('@pages/contact')).routes,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
