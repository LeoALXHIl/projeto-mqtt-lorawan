import { Component } from '@angular/core';
import { MqttHeader } from '../mqtt-header/mqtt-header';
import { MqttWhatIs } from '../mqtt-what-is/mqtt-what-is';
import { MqttFichaTecnica } from '../mqtt-ficha-tecnica/mqtt-ficha-tecnica';
import { MqttCasosSucesso } from '../mqtt-casos-sucesso/mqtt-casos-sucesso';
import { MqttAlerta } from '../mqtt-alerta/mqtt-alerta';

@Component({
  selector: 'app-mqtt',
  imports: [MqttHeader, MqttWhatIs, MqttFichaTecnica, MqttCasosSucesso, MqttAlerta],
  templateUrl: './mqtt.html',
  styleUrl: './mqtt.scss'
})
export class Mqtt {

}
