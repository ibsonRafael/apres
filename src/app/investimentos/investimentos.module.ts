import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestimentosRoutingModule } from './investimentos-routing.module';
import { HomeComponent } from './home/home.component';
import { InvestimentosListaComponent } from './investimentos-lista/investimentos-lista.component';
import { InvestimentoDetalhesComponent } from './investimento-detalhes/investimento-detalhes.component';
import { InvestimentoCompraComponent } from './investimento-compra/investimento-compra.component';

@NgModule({
  imports: [
    CommonModule,
    InvestimentosRoutingModule
  ],
  declarations: [HomeComponent, InvestimentosListaComponent, InvestimentoDetalhesComponent, InvestimentoCompraComponent]
})
export class InvestimentosModule { }
