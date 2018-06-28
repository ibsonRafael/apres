export interface IInvestimento {
  id?: any;
  nome?: any;
  taxa?: any;

  user?: any;

  loading: boolean;
  data: Array<any>;
  error?: any;
}
