import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-filtro-fundos',
  templateUrl: './filtro-fundos.component.html',
  styleUrls: ['./filtro-fundos.component.css']
})
export class FiltroFundosComponent implements OnInit, OnChanges {

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
