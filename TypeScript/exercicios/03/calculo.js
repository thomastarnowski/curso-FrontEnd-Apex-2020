var Calculo = /** @class */ (function () {
    function Calculo() {
    }
    // Cálculo
    Calculo.prototype.calculo = function () {
        // Total
        var total = 0;
        // Condicional
        switch (this.operacao) {
            case "soma":
                total = this.valor1 + this.valor2;
                break;
            case "subtração":
                total = this.valor1 - this.valor2;
                break;
            case "multiplicação":
                total = this.valor1 * this.valor2;
                break;
            case "divisão":
                total = this.valor1 / this.valor2;
                break;
        }
        // Retorno
        return total;
    };
    return Calculo;
}());
