import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

  checkDataPesqusia() {
    if(this.pesquisaService.pesquisa) {
      this.pesquisa = this.pesquisaService.pesquisa.find(data => data.id = this.id)
    } else {
      this.pesquisaService.reqOnlyPesquisa(this.id).subscribe(data => this.pesquisa = data)
    }
  }

  getParam(){
    this.route.params.subscribe(param => this.id = param['id'])
  }
  
  ngOnInit(): void {
    this.getParam();
    this.checkDataPesqusia();
  }

}
