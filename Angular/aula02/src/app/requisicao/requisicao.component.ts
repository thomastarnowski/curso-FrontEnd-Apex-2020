import { Component, OnInit } from '@angular/core';
import { Comments } from '../modelo/comments';
import { CommentsService } from '../servicos/comments.service';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.css']
})
export class RequisicaoComponent implements OnInit {

  vetor: Comments[];

  constructor(private servico: CommentsService) { }

  ngOnInit(): void {
    this.selecionar();
  }

  // chamar o metodo obterDados do servico
  selecionar():void {
    this.servico.obterDados()
    .subscribe(retorno => {
      this.vetor = retorno;
      console.table(retorno);
    })
  }

}
