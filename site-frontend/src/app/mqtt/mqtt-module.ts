import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MqttRoutingModule } from './mqtt-routing-module';
import { MqttOverview } from './mqtt-overview/mqtt-overview';
import { MqttHeader } from './mqtt-header/mqtt-header';
import { MqttWhatIs } from './mqtt-what-is/mqtt-what-is';
import { MqttFichaTecnica } from './mqtt-ficha-tecnica/mqtt-ficha-tecnica';
import { MqttCasosSucesso } from './mqtt-casos-sucesso/mqtt-casos-sucesso';
import { MqttAlerta } from './mqtt-alerta/mqtt-alerta';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MqttRoutingModule,
    MqttOverview,
    MqttHeader,
    MqttWhatIs,
    MqttFichaTecnica,
    MqttCasosSucesso,
    MqttAlerta
  ]
})
export class MqttModule { }
