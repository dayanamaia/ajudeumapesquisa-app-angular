import { IPesquisas } from './../../services/interfaces/pesquisa.interface';
import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pesquisas: IPesquisas;

  constructor(
    private pesquisaService: PesquisaService
  ) { }

  setPesquisas() {
    this.pesquisaService.getPesquisas().subscribe(data => this.pesquisas = data);
  }

  ngOnInit(): void {
    this.setPesquisas();
  }

}
