import { Component, OnInit } from '@angular/core';
import {FundosPropertiesBagService} from "../services/fundos-properties-bag.service";

@Component({
  selector: 'app-fundo-compra',
  templateUrl: './fundo-compra.component.html',
  styleUrls: ['./fundo-compra.component.css']
})
export class FundoCompraComponent implements OnInit {

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
