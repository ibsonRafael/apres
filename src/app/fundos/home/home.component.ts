import {Component, OnInit, ViewChild} from '@angular/core';
import {FundosPropertiesBagService} from "../services/fundos-properties-bag.service";
import {FiltroFundosComponent} from "../filtro-fundos/filtro-fundos.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    FundosPropertiesBagService
  ]
})
export class HomeComponent implements OnInit {

  fundosFiltrados: Array<any> = [];

  fundos: Array<any> = [
    {
      nome: "CDI X", taxa: "12,0%"
    },
    {
      nome: "CDB Y", taxa: "14,0%"
    },
    {
      nome: "DI M", taxa: "13,0%"
    },
    {
      nome: "DI K", taxa: "12,0%"
    },
    {
      nome: "CDI Z", taxa: "11,0%"
    },
    {
      nome: "CDB Q", taxa: "17,0%"
    }
  ];

  get exibirTaxaIR(): boolean {
    return this._fundosPropertiesBagService.exibirTaxaIR;
  }
  set exibirTaxaIR(valor) {
    this._fundosPropertiesBagService.exibirTaxaIR = valor;
  }


  get fundoSelecionado(): any {
    return this._fundosPropertiesBagService.fundoSelecionado;
  }
  set fundoSelecionado(valor) {
    this._fundosPropertiesBagService.fundoSelecionado = valor;
  }


  @ViewChild(FiltroFundosComponent) _filtroFundosComponent: FiltroFundosComponent;

  constructor(
    private _fundosPropertiesBagService: FundosPropertiesBagService
  ) { }

  ngOnInit() {
    this._filtroFundosComponent.valorFiltro = this._fundosPropertiesBagService.filtrarPor;
    this.filtrarFundosLocal('');
  }

  private handleValorChange(event): void {
    console.log('handleValorChange', event);
    this._fundosPropertiesBagService.filtrarPor = event;
    this.filtrarFundosLocal(event);
  }

  private filtrarFundosLocal(valor:string): void {
    this.fundosFiltrados = this.fundos.filter(item => {
      return item.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1;
    });
  }

  private handleExibirTaxa() {
      this.exibirTaxaIR = !this.exibirTaxaIR;
  }
}
