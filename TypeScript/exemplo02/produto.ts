// classe
// objeto
// atributos
// metodos

class Produto {
  // atributos
  nome: string;
  valor: number;
  segmento: string;

  // ICMS
  icms(): number {
    return this.segmento == "eletrônico" ? this.valor * 0.2 : this.valor * 0.1;
  }

  // mensagem
  mensagem(): void {
    let valorIcms = this.icms();
    document.write("O produto " + this.nome + " terá o ICMS de R$" + valorIcms);
  }
}
