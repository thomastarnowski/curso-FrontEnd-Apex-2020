import React from 'react';
import ReactDOM from 'react-dom';


// class
class Principal extends React.Component{

// construtor
constructor(){
  super();
  
  this.state = {
    nome: '',
    idade: '',
    vetor: []
  }
}

// funcao teclar
teclar = (campo) => {


  let nome_campo = campo.target.name;
  let valor_campo = campo.target.value;

  this.setState({[nome_campo] : valor_campo});
}

// funcao de cadastro
cadastrar = (elemento) => {
  
    elemento.preventDefault();

    let objeto = {
      "nome": this.state.nome,
      "idade": this.state.idade
    }

    let copiaVetor = this.state.vetor;

    copiaVetor.push(objeto)

    this.setState({vetor: copiaVetor});

    this.setState({nome:""});
    this.setState({idade:""});
}

  // render
    render(){
      return (
        <div>
            
            {/* formulario */}
            <form onSubmit={this.cadastrar}>
              <input type="text" name="nome" value={this.state.nome} placeholder="Nome" onChange={this.teclar} />
              <input type="text" name="idade" value={this.state.idade} placeholder="Idade" onChange={this.teclar} />
              <input type="submit"/>
            </form>

            {/* tabela */}
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Excluir</th>
                </tr>
              </thead>

              <tbody>
                {this.state.vetor.map((pessoa, linha) => (
                  <tr key={linha}>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.idade}</td>
                    <td>teste..</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
  }

}


// Exportar componente
ReactDOM.render(<Principal />, document.getElementById('root'));