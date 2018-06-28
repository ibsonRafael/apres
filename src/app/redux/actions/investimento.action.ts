import { Action } from "@ngrx/store";
import { IInvestimento } from "../../models/investimento.model";

export const GET_INVESTIMENTOS =         '[Investimento] Lista inevstimentos';
export const GET_INVESTIMENTOS_SUCCESS = '[Investimento] Sucesso ao listar inevstimentos';
export const GET_INVESTIMENTOS_FAIL =    '[Investimento] Erro ao listar inevstimentos';


export class GetInvestimentos implements Action {
  readonly type = GET_INVESTIMENTOS;
  constructor (public payload?: any) {

  }
}

export class GetInvestimentosFail implements Action {
  readonly type = GET_INVESTIMENTOS_FAIL;
  constructor (public payload?: any) {

  }
}

export class GetInvestimentosSuccess implements Action {
  readonly type = GET_INVESTIMENTOS_SUCCESS;
  constructor (public payload?: any) {

  }
}


/**
 * Content based swticher - Begin
 */
export const SAVE_INVESTIMENTO =    '[Investimento] Salva investimento';
export const INSERT_INVESTIMENTO =  '[Investimento] Adiciona um novo investimento';
export const UPDATE_INVESTIMENTO =  '[Investimento] Atualiza um investimento';
export const INVESTIMENTO =         '[Investimento] Salva investimento';
export const INSERT_INVESTIMENTO_API = '[Investimento] Envia dto para backend...';
export class SalvaInvestimento implements Action {
  readonly type = SAVE_INVESTIMENTO;
  constructor (public payload?: any) {

  }
}
export class SalvaInvestimentoApi implements Action {
  readonly type = INSERT_INVESTIMENTO_API;
  constructor (public payload?: any) {

  }
}
export class InserirInvestimento implements Action {
  readonly type = INSERT_INVESTIMENTO;
  constructor (public payload?: any) {

  }
}
export class AtualizarInvestimento implements Action {
  readonly type = UPDATE_INVESTIMENTO;
  constructor (public payload?: any) {

  }
}
export class InvestimentoSalvo implements Action {
  readonly type = INVESTIMENTO;
  constructor (public payload?: any) {

  }
}

/**
 * Content based swticher - End
 */


export const ADD_LOG =   '[Investimento] Adicionar log';
export const ADD_LOG_USER =   '[Investimento] Adicionar log de usuario';
export const ADD_LOG_GUEST =  '[Investimento] Adicionar log de visitante';
export const LOG_ADDED = '[Investimento] Log criado com sucesso';
export const LOG_ERROR = '[Investimento] Erro ao criar o log';

export class AddLog implements Action {
  readonly type = ADD_LOG;
  constructor (public payload?: any) {

  }
}

export class AddLogUser implements Action {
  readonly type = ADD_LOG_USER;
  constructor (public payload?: any) {

  }
}

export class AddLogGuest implements Action {
  readonly type = ADD_LOG_GUEST;
  constructor (public payload?: any) {

  }
}

export class AddLogSuccess implements Action {
  readonly type = LOG_ADDED;
  constructor (public payload?: any) {

  }
}

export class AddLogFail implements Action {
  readonly type = LOG_ERROR;
  constructor (public payload?: any) {

  }
}


export type All = GetInvestimentos
  | GetInvestimentosFail
  | GetInvestimentosSuccess
  | AddLog
  | AddLogUser
  | AddLogGuest
  | AddLogSuccess
  | AddLogFail
  | SalvaInvestimento
  | SalvaInvestimentoApi
  | InserirInvestimento
  | AtualizarInvestimento
  | InvestimentoSalvo;
