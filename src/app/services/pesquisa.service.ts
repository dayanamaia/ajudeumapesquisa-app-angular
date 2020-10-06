import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPesquisas } from './interfaces/pesquisa.interfaces';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private pesquisas: IPesquisas;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  getPesquisas(): Observable<IPesquisas> {
    return this.http.get<IPesquisas>(`${environment.urlService}/pesquisas`,this.httpOptions);
  }
  
}
