import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LorawanRoutingModule } from './lorawan-routing-module';
import { Lorawan } from './lorawan/lorawan';
import { LorawanHeader } from './lorawan-header/lorawan-header';
import { LorawanWhatIs } from './lorawan-what-is/lorawan-what-is';
import { LorawanFichaTecnica } from './lorawan-ficha-tecnica/lorawan-ficha-tecnica';
import { LorawanCasosSucesso } from './lorawan-casos-sucesso/lorawan-casos-sucesso';
import { LorawanAlerta } from './lorawan-alerta/lorawan-alerta';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LorawanRoutingModule,
    Lorawan,
    LorawanHeader,
    LorawanWhatIs,
    LorawanFichaTecnica,
    LorawanCasosSucesso,
    LorawanAlerta
  ]
})
export class LorawanModule { }
