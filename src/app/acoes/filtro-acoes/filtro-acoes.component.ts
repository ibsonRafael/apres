import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-filtro-acoes',
  templateUrl: './filtro-acoes.component.html',
  styleUrls: ['./filtro-acoes.component.css']
})
export class FiltroAcoesComponent implements OnInit {

  @Input('valorFiltro') valorFiltro: string = '';
  @Input('qtdeLocalizada') qtdeLocalizada: number = 0;

  @Output() valorChange:EventEmitter<string> = new EventEmitter<string>();

  private qtdeLocalizadaText: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['qtdeLocalizada'] && changes['qtdeLocalizada'].currentValue == 0){
      this.qtdeLocalizadaText = 'Nenhum item localizado!';
    } else {
      this.qtdeLocalizadaText = this.qtdeLocalizada  + ' items localizados!';
    }
  }

  public onValorChange(event): void {
    this.valorChange.emit(event);
  }

}
