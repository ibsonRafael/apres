import { Component, OnInit } from '@angular/core';
import {FundosPropertiesBagService} from "../services/fundos-properties-bag.service";

@Component({
  selector: 'app-fundo-detalhe',
  templateUrl: './fundo-detalhe.component.html',
  styleUrls: ['./fundo-detalhe.component.css']
})
export class FundoDetalheComponent implements OnInit {

  get exibirTaxaIR(): boolean {
    return this._fundosPropertiesBagService.exibirTaxaIR;
  }
  set exibirTaxaIR(valor) {
    this._fundosPropertiesBagService.exibirTaxaIR = valor;
  }

  constructor(
    private _fundosPropertiesBagService: FundosPropertiesBagService
  ) { }

  ngOnInit() {
  }

}
