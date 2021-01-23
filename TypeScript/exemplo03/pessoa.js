var Pessoa = /** @class */ (function () {
    // construtor
    function Pessoa() {
        console.log("Método construtor");
    }
    // metodo
    Pessoa.prototype.metodo = function () {
        console.log("Método simples");
    };
    return Pessoa;
}());
