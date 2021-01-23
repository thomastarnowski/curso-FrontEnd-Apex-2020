//   Desenvolver uma classe contendo os atributos:
//   > nome
//   > nota1
//   > nota2

//   Criar os métodos
//   calculo():number -> Retorna a média
//   situacao(media):string -> Retorna se está aprovado(a) ou reprovado(a)
//   mensagem():void -> Exibe a média e a situação

// criando classe
class Aluno {
  // criando atributos
  nome: string;
  nota1: number;
  nota2: number;

  // metodo pra fazer calculo da media
  calculo(): number {
    return (this.nota1 + this.nota2) / 2;
  }

  // situacao
  situacao(media: number): string {
    return media >= 7 ? "Aprovado" : "Reprovado";
  }

  // mensagem
  mensagem(): void {
    let media: number = this.calculo();
    let situacao: string = this.situacao(media);

    alert(this.nome + " está " + situacao + " com media " + media);
  }
}
