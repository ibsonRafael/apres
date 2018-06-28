import { Injectable } from '@angular/core';
import { Effect, Actions} from "@ngrx/effects";

import {Observable} from "rxjs-compat/index";
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/zip';
import 'rxjs-compat/add/operator/delay';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/mergeMap';
import 'rxjs-compat/add/operator/switchMap';



import * as investimentoActions from '../actions/investimento.action';
import {InvestimentoApiService} from "../../investimento-api.service";
import {of} from "rxjs/index";
import {AuthService} from "../../user/auth.service";


export type Action = investimentoActions.All;

@Injectable({ providedIn: 'root' })
export class InvestimentoEffects {

  constructor(
    private actions: Actions,
    private _investimentoApiService: InvestimentoApiService,
    private _authService: AuthService
  ) { }


  @Effect()
  getInvestimento: Observable<Action> = this.actions.ofType(investimentoActions.GET_INVESTIMENTOS)
    .map((action: investimentoActions.GetInvestimentos) => action.payload)
    .delay(1500)
    .switchMap(state => {
      // return Observable.of(null);
      return this._investimentoApiService.getInvestimento(state)
        .map( response => {
          const payload = {...response, user: this._authService.getUser()};
          return new investimentoActions.GetInvestimentosSuccess(payload);
        } )
        .catch( error => of( new investimentoActions.GetInvestimentosFail(error) ) );
    });

  // /** Spliter **/
  // @Effect()
  // insereInvestimento: Observable<Action> = this.actions.ofType(investimentoActions.INSERT_INVESTIMENTO)
  //   .flatMap(
  //     item => [
  //       {type: investimentoActions.ADD_LOG, payload: item},
  //       {type: investimentoActions.INSERT_INVESTIMENTO_API, payload: item},
  //     ]
  //   );


  // /** Content based **/
  // @Effect()
  // getSalvaInvestimento: Observable<Action> = this.actions.ofType(investimentoActions.SAVE_INVESTIMENTO)
  //   .map(
  //     item => {
  //       if(item.id == null) {
  //         return ({type: investimentoActions.INSERT_INVESTIMENTO, payload: item});
  //       } else {
  //         return ({type: investimentoActions.UPDATE_INVESTIMENTO, payload: item});
  //       }
  //     }
  //   );

  // /** Context based **/
  // @Effect()
  // getSalvaLogs: Observable<Action> = this.actions.ofType(investimentoActions.ADD_LOG)
  //   .map(
  //     item => {
  //       if(this._authService.isLoggedIn()) {
  //         return ({type: investimentoActions.ADD_LOG_USER, payload: item});
  //       } else {
  //         return ({type: investimentoActions.ADD_LOG_GUEST, payload: item});
  //       }
  //     }
  //   );


  // /** Aggregator **/
  // @Effect()
  // insereInvestimento: Observable<Action> = this.actions.ofType(investimentoActions.INSERT_INVESTIMENTO)
  //   .flatMap(
  //     item => zip (
  //       {type: investimentoActions.ADD_LOG, payload: item},
  //       {type: investimentoActions.INSERT_INVESTIMENTO_API, payload: item}
  //     )
  //   ).map(
  //     retorno => (
  //       {type: investimentoActions.INVESTIMENTO, payload: {investimento: retorno[0], log:retorno[1]}}
  //     )
  //   );

}

