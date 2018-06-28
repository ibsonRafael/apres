import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundosRoutingModule } from './fundos-routing.module';
import { FundosListaComponent } from './fundos-lista/fundos-lista.component';
import { HomeComponent } from './home/home.component';
import { FundoDetalheComponent } from './fundo-detalhe/fundo-detalhe.component';
import { FundoCompraComponent } from './fundo-compra/fundo-compra.component';
import {FiltroFundosComponent} from "./filtro-fundos/filtro-fundos.component";

@NgModule({
  imports: [
    CommonModule,
    FundosRoutingModule
  ],
  declarations: [
    FundosListaComponent, HomeComponent, FundoDetalheComponent, FundoCompraComponent,
    FiltroFundosComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FundosModule { }
