import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IPesquisa } from 'src/app/services/interfaces/pesquisa.interfaces';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  pesquisa: IPesquisa;
  id: number;

  constructor(
    private pesquisaService: PesquisaService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  checkDataPesqusia() {
    if(this.pesquisaService.pesquisa) {
      this.pesquisa = this.pesquisaService.pesquisa[this.id -1];
    } else {
      this.pesquisaService.reqOnlyPesquisa(this.id).subscribe(data => this.pesquisa = data)
    }
  }

  getParam(){
    this.activatedRoute.params.subscribe(param => this.id = parseInt(param['id'], 10))
  }
  
goBack() {
  this.location.back();
}

  ngOnInit(): void {
    this.getParam();
    this.checkDataPesqusia();
  }

}
