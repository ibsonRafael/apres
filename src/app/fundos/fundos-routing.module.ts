import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FundoDetalheComponent} from "./fundo-detalhe/fundo-detalhe.component";
import {FundoCompraComponent} from "./fundo-compra/fundo-compra.component";

const routes: Routes = [
  {
    path:'', component:HomeComponent,
    children: [
      {path:'detalhes', component:FundoDetalheComponent},
      {path:'compra', component:FundoCompraComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundosRoutingModule { }
