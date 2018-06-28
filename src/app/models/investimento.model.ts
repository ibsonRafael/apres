export interface IInvestimento {
  id?: number;
  nome?: string;
  taxa?: string;

  loading: boolean;
  data: Array<any>;
  error?: any;
}
