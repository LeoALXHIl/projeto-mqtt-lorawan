import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lorawan } from './lorawan/lorawan';

const routes: Routes = [
	{ path: '', component: Lorawan }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LorawanRoutingModule { }
