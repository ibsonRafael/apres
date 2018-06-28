import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AcoesPropertiesBagService {

  public exibirTaxaIR: boolean = false;
  public filtrarPor: string = '';
  public acaoSelecionada: any = null;

  constructor() {
    console.log('[acoes] New Service Instace: AcoesPropertiesBagService');
  }
}
