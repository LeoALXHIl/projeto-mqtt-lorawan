import { Component } from '@angular/core';
import { LorawanHeader } from '../lorawan-header/lorawan-header';
import { LorawanWhatIs } from '../lorawan-what-is/lorawan-what-is';
import { LorawanFichaTecnica } from '../lorawan-ficha-tecnica/lorawan-ficha-tecnica';
import { LorawanCasosSucesso } from '../lorawan-casos-sucesso/lorawan-casos-sucesso';
import { LorawanAlerta } from '../lorawan-alerta/lorawan-alerta';

@Component({
  selector: 'app-lorawan',
  imports: [LorawanHeader, LorawanWhatIs, LorawanFichaTecnica, LorawanCasosSucesso, LorawanAlerta],
  templateUrl: './lorawan.html',
  styleUrl: './lorawan.scss'
})
export class Lorawan {

}
