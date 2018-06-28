import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesListaComponent } from './acoes-lista/acoes-lista.component';
import { AcaoDetalheComponent } from './acao-detalhe/acao-detalhe.component';
import { AcaoCompraComponent } from './acao-compra/acao-compra.component';
import { HomeComponent } from './home/home.component';
import { FiltroAcoesComponent } from './filtro-acoes/filtro-acoes.component';

@NgModule({
  imports: [
    CommonModule,
    AcoesRoutingModule
  ],
  declarations: [
    AcoesListaComponent,
    AcaoDetalheComponent,
    AcaoCompraComponent,
    HomeComponent,
    FiltroAcoesComponent
  ]
})
export class AcoesModule { }
