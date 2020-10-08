import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPesquisa } from './interfaces/pesquisa.interfaces';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private pesquisas: IPesquisa[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  reqPesquisas(): Observable<IPesquisa[]> {
    return this.http.get<IPesquisa[]>(`${environment.urlService}/pesquisas`, this.httpOptions);
  }

  reqOnlyPesquisa(id: number): Observable<IPesquisa> {
    return this.http.get<IPesquisa>(`${environment.urlService}/pesquisas/${id}`, this.httpOptions);
  }

  set pesquisa(arr: IPesquisa[]) {
    this.pesquisas = arr;
  }

  get pesquisa(): IPesquisa[] {
    return this.pesquisas;
  }
  
}
