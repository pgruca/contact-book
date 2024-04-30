import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list',
        title: 'Contact List',
        loadComponent: async () => (await import('./list/list.component')).ListComponent,
    },
    {
        path: 'preview/:id',
        title: 'Preview Contact',
        loadComponent: async () => (await import('./preview/preview.component')).PreviewComponent,
    },
];
