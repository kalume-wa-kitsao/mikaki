import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
        title: 'MiKaKi — Software Engineer',
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./features/projects/projects').then((m) => m.Projects),
        title: 'Projects — MiKaKi',
    },
    {
        path: 'experience',
        loadComponent: () =>
            import('./features/experience/experience').then((m) => m.Experience),
        title: 'Experience — MiKaKi',
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./features/contact/contact').then((m) => m.Contact),
        title: 'Contact — MiKaKi',
    },

    // 404 — must be last
    {
        path: '**',
        loadComponent: () =>
            import('./shared/components/not-found/not-found').then((m) => m.NotFound),
        title: '404 — Page Not Found',
    },
];
