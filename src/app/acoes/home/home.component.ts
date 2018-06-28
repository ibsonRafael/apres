import {Component, OnInit, ViewChild} from '@angular/core';
import {AcoesPropertiesBagService} from "../services/acoes-properties-bag.service";
import {FiltroAcoesComponent} from "../../acoes/filtro-acoes/filtro-acoes.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  acoesFiltrados: Array<any> = [];

  acoes: Array<any> = [
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
    return this._acoesPropertiesBagService.exibirTaxaIR;
  }
  set exibirTaxaIR(valor) {
    this._acoesPropertiesBagService.exibirTaxaIR = valor;
  }


  get acaoSelecionada(): any {
    return this._acoesPropertiesBagService.acaoSelecionada;
  }
  set acaoSelecionada(valor) {
    this._acoesPropertiesBagService.acaoSelecionada = valor;
  }


  @ViewChild(FiltroAcoesComponent) _filtroAcoesComponent: FiltroAcoesComponent;

  constructor(
    private _acoesPropertiesBagService: AcoesPropertiesBagService
  ) { }

  ngOnInit() {
    this._filtroAcoesComponent.valorFiltro = this._acoesPropertiesBagService.filtrarPor;
    this.filtrarAcoesLocal('');
  }

  private handleValorChange(event): void {
    console.log('handleValorChange', event);
    this._acoesPropertiesBagService.filtrarPor = event;
    this.filtrarAcoesLocal(event);
  }

  private filtrarAcoesLocal(valor:string): void {
    this.acoesFiltrados = this.acoes.filter(item => {
      return item.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1;
    });
  }

  private handleExibirTaxa() {
    this.exibirTaxaIR = !this.exibirTaxaIR;
  }

}
