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
        canActivate:[heroSelectedGuard]
    },
    {
        path: '',
        redirectTo: 'choice-hero',
        pathMatch: 'full'
    }
];
