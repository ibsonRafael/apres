import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Rx";
import  { IInvestimento } from "../../models/investimento.model";

import * as investimentoActions from "../../redux/actions/investimento.action";

interface AppState {
  investimento: IInvestimento;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _investimentos$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this._investimentos$ = this.store.select('investimento');
  }

  ngOnInit() {
    this.store.dispatch(new investimentoActions.GetInvestimentos());
  }



}
