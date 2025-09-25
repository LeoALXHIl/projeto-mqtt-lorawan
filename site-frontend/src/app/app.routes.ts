
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
			path: 'menu',
			loadComponent: () => import('./menu.component').then(m => m.MenuComponent)
		},
		{
			path: 'oque',
			loadComponent: () => import('./oque.component').then(m => m.OqueComponent)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'menu'
	},
	{
		path: '**',
			redirectTo: 'menu'
		}
	];
