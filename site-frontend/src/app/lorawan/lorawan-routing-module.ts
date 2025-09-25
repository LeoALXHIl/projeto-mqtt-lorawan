import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LorawanOverview } from './lorawan-overview/lorawan-overview';
import { LorawanHeader } from './lorawan-header/lorawan-header';
import { LorawanWhatIs } from './lorawan-what-is/lorawan-what-is';
import { LorawanFichaTecnica } from './lorawan-ficha-tecnica/lorawan-ficha-tecnica';
import { LorawanCasosSucesso } from './lorawan-casos-sucesso/lorawan-casos-sucesso';
import { LorawanAlerta } from './lorawan-alerta/lorawan-alerta';

const routes: Routes = [
  { path: '', component: LorawanOverview },
  { path: 'header', component: LorawanHeader },
  { path: 'what-is', component: LorawanWhatIs },
  { path: 'ficha-tecnica', component: LorawanFichaTecnica },
  { path: 'casos-sucesso', component: LorawanCasosSucesso },
  { path: 'alerta', component: LorawanAlerta }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LorawanRoutingModule { }
