var Produto = /** @class */ (function () {
    function Produto() {
    }
    // Cálculo
    Produto.prototype.calculo = function () {
        return this.valor >= 100 ? this.valor * 0.9 : this.valor;
    };
    // Mensagem
    Produto.prototype.mensagem = function () {
        var calculo = this.calculo();
        document.write("O produto " + this.nome + " terá o valor R$" + calculo);
    };
    return Produto;
}());
