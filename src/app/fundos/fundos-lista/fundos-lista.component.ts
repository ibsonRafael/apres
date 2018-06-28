import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-fundos-lista',
  templateUrl: './fundos-lista.component.html',
  styleUrls: ['./fundos-lista.component.css']
})
export class FundosListaComponent implements OnInit, OnChanges {

  @Input('fundos') fundos: Array<any> = [];
  @Input('exibirTaxa') exibirTaxa: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
