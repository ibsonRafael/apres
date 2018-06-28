import { Injectable } from '@angular/core';
import {FundosModule} from "../fundos.module";

@Injectable()
export class FundosPropertiesBagService {
  public exibirTaxaIR: boolean = false;
  public filtrarPor: string = '';
  public fundoSelecionado: any = null;

  constructor() {
    console.log('[fundo] New Service Instace: FundosPropertiesBagService');
  }
}
