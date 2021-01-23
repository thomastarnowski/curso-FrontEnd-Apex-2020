var Produto = /** @class */ (function () {
    function Produto() {
    }
    // ICMS
    Produto.prototype.icms = function () {
        return this.segmento == "eletrônico" ? this.valor * 0.2 : this.valor * 0.1;
    };
    // mensagem
    Produto.prototype.mensagem = function () {
        var valorIcms = this.icms();
        document.write("O produto " + this.nome + " terá o ICMS de R$" + valorIcms);
    };
    return Produto;
}());
