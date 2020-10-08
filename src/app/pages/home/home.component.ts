import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';

import { IPesquisa } from '../../services/interfaces/pesquisa.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pesquisas: IPesquisa[] = [];

  constructor(
    private pesquisaService: PesquisaService
  ) { }

  setPesquisas() {
    this.pesquisaService.reqPesquisas().subscribe(data => { 
      this.pesquisas = data;
      this.pesquisaService.pesquisa = data;
    });
  }

  hasPesquisas() {
    return this.pesquisas.length > 0;
  }

  ngOnInit(): void {
    this.setPesquisas();
  }

}
