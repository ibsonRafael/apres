import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-acoes-lista',
  templateUrl: './acoes-lista.component.html',
  styleUrls: ['./acoes-lista.component.css']
})
export class AcoesListaComponent implements OnInit {

  @Input('acoes') acoes: Array<any> = [];
  @Input('exibirTaxa') exibirTaxa: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
