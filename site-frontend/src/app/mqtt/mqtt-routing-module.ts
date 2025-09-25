import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mqtt } from './mqtt/mqtt';

const routes: Routes = [
	{ path: '', component: Mqtt }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MqttRoutingModule { }
