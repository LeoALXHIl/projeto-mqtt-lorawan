import { Routes } from '@angular/router';

import { Home } from './home/home';

export const routes: Routes = [
	{
		path: 'home',
		component: Home
	},
	{
		path: 'mqtt',
		loadChildren: () => import('./mqtt/mqtt-module').then(m => m.MqttModule)
	},
	{
		path: 'lorawan',
		loadChildren: () => import('./lorawan/lorawan-module').then(m => m.LorawanModule)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
