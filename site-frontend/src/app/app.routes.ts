
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'mqtt',
		loadChildren: () => import('./mqtt/mqtt.module').then(m => m.MqttModule)
	},
	{
		path: 'lorawan',
		loadChildren: () => import('./lorawan/lorawan.module').then(m => m.LorawanModule)
		// Make sure the file 'src/app/lorawan/lorawan.module.ts' exists and exports 'LorawanModule'
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
