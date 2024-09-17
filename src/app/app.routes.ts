import { Routes } from '@angular/router';
import { heroSelectedGuard, heroNoSelectedGuard } from './guards/hero-selected/hero-selected.guard';


export const routes: Routes = [
    {
        path: 'choice-hero',
        loadComponent: () => import('./choice-character/choice-character.component')
            .then(c => c.ChoiceCharacterComponent),
        canActivate:[heroNoSelectedGuard]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
        .then(c => c.DashboardComponent),
        canActivate:[heroSelectedGuard],
        children:[
            {
                path: 'info',
                loadComponent: () => import('./dashboard/components/info/info.component')
                    .then(c => c.InfoComponent)
            },
            {
                path: 'objetivos',
                loadComponent: () => import('./dashboard/components/objetivos/objetivos.component')
                    .then(c => c.ObjetivosComponent)
            },
            {
                path: 'mercado',
                loadComponent: () => import('./dashboard/components/market/market.component')
                    .then(c => c.MarketComponent)
            },
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '',
        redirectTo: 'choice-hero',
        pathMatch: 'full'
    }
];
