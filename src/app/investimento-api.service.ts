import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/index";
import { HttpClient, HttpResponse, HttpHeaders }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoApiService {

  /**
   * Realiza a mesclagem dos headers globais com os headers especificos do
   * serviço se houver algum
   * @type {{headers: HttpHeaders}}
   */
  private httpOptions = {
    headers: new HttpHeaders(Object.assign(
      {},
      {
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }
    ))
  };

  constructor(
    protected http: HttpClient
  ) { }

  getInvestimento(state: any): Observable<any> {
    let endpoint: string = 'api/investimentos';

    let observable: Observable<any> = this.http.get<any>(endpoint, this.httpOptions);
    return observable;
  }
}
