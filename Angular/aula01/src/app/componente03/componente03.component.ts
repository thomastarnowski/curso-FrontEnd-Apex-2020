import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente03',
  templateUrl: './componente03.component.html',
  styleUrls: ['./componente03.component.css']
})
export class Componente03Component implements OnInit {

  nome : string;
  idade : number;

  // funcao 
  funcao():void {
    alert("Nome: " +this.nome+"\nIdade:" +this.idade);
    this.nome = null;
    this.idade = null;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
