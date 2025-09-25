import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MqttOverview } from './mqtt-overview/mqtt-overview';
import { MqttHeader } from './mqtt-header/mqtt-header';
import { MqttWhatIs } from './mqtt-what-is/mqtt-what-is';
import { MqttFichaTecnica } from './mqtt-ficha-tecnica/mqtt-ficha-tecnica';
import { MqttCasosSucesso } from './mqtt-casos-sucesso/mqtt-casos-sucesso';
import { MqttAlerta } from './mqtt-alerta/mqtt-alerta';

const routes: Routes = [
  { path: '', component: MqttOverview },
  { path: 'header', component: MqttHeader },
  { path: 'what-is', component: MqttWhatIs },
  { path: 'ficha-tecnica', component: MqttFichaTecnica },
  { path: 'casos-sucesso', component: MqttCasosSucesso },
  { path: 'alerta', component: MqttAlerta }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MqttRoutingModule { }
