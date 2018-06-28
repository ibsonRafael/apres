import * as InvestimentoActions from '../actions/investimento.action';
import {IInvestimento} from "../../models/investimento.model";
import {GET_INVESTIMENTOS} from "../actions/investimento.action";

export type Action = InvestimentoActions.All;

//Reducer func
export function investimentoReducer (state: IInvestimento, action: Action) {
  switch (action.type) {
    case InvestimentoActions.GET_INVESTIMENTOS:
      return {...state, data: [], loading: true};

    case InvestimentoActions.GET_INVESTIMENTOS_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case InvestimentoActions.GET_INVESTIMENTOS_FAIL:
      return {...state, data: [], loading: false, error: "Erro!"};

    case InvestimentoActions.ADD_LOG:
      return {...state, data: [], loading: true};

    case InvestimentoActions.LOG_ADDED:
      return {...state, data: action.payload, loading: false};

    case InvestimentoActions.LOG_ERROR:
      return {...state, data: [], loading: false, error: "Erro!"};

    case InvestimentoActions.INSERT_INVESTIMENTO:
      return {...state, data: action.payload, loading: false};

    case InvestimentoActions.INSERT_INVESTIMENTO_API:
      return {...state, data: action.payload, loading: false};

    default:
      return state;
  }
}
