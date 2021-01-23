//   Desenvolver uma classe contendo os atributos:
//   > nome
//   > nota1
//   > nota2
//   Criar os métodos
//   calculo():number -> Retorna a média
//   situacao(media):string -> Retorna se está aprovado(a) ou reprovado(a)
//   mensagem():void -> Exibe a média e a situação
// criando classe

var Aluno = /** @class */ (function () {
  function Aluno() {}
  // metodo pra fazer calculo da media
  Aluno.prototype.calculo = function () {
    return (this.nota1 + this.nota2) / 2;
  };
  // situacao
  Aluno.prototype.situacao = function (media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
  };
  // mensagem
  Aluno.prototype.mensagem = function () {
    var media = this.calculo();
    var situacao = this.situacao(media);
    alert(this.nome + " está " + situacao + " com media " + media);
  };
  return Aluno;
})();
