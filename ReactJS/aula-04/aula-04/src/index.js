import React from 'react';
import ReactDOM from 'react-dom';

// classe
class ProjetoCursos extends React.Component{

  // construtor
    constructor(props){
      super(props);

      this.state = {
        vetor: [],
        nome: '',
        valor: ''
      }
    }

    // Ao carregar o componente
    componentDidMount(){
      fetch('http://localhost:3000/cursos')
      .then(resultado => resultado.json())
      .then(resultado => this.setState({vetor: resultado}))
      .catch(erro => alert("Falha ao obter dados"))
    }
    
    // funcao teclar
    teclar = (elemento) => {
      let nome_elemento = elemento.target.name;
      let valor_elemento = elemento.target.value;

      this.setState({[nome_elemento] : valor_elemento})
    }

    // funcao de cadastro
    cadastrar = () => {

        // caracteristicas para o envio
        let caracteristicas = {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "nome": this.state.nome,
            "valor": this.state.valor
          })
        }

        // efetuar o cadastro 
        fetch('http://localhost:3000/cursos', caracteristicas)
        .then(resposta => resposta.json())
        .then(resposta => {
          let vetor_temporario = this.state.vetor;
          vetor_temporario.push(resposta);
          this.setState({vetor: vetor_temporario})
        })
    }

    // funcao remover
    remover = (codigo, linha) => {
      
        // caracteristicas deletar
        let caracteristicas = {
          method: 'DELETE', 
          headers: {'Content-Type': 'application/json'},
        }

          // efetuar a remoção
        fetch('http://localhost:3000/cursos/'+codigo, caracteristicas)
        .then(resposta => resposta.json())
        .then(resposta => {
          let vetor_temporario = this.state.vetor;
          vetor_temporario.splice(linha, 1);
          this.setState({vetor: vetor_temporario})
        })
          
    }

    // render
    render(){
      return (
        <main>

          {/* FORMULARIO */}
          <form>
            <input type="text" onChange={this.teclar} name="nome"  placeholder="Nome"></input>
            <input type="text" onChange={this.teclar}name="valor" placeholder="Valor"></input>
            <input type="button" value="Cadastrar" onClick={this.cadastrar}></input>
          </form>

            {/* TABELA COM RESULTADOS */}
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Valor</th>
                  <th>Remover</th>
                </tr>
              </thead>

              <tbody>
                {this.state.vetor.map((objeto, linha) => (
                  <tr key={linha}>
                    <td>{objeto.nome}</td>
                    <td>{objeto.valor}</td>
                    <td><button onClick={() => (this.remover(objeto.id, linha))}>Remover</button></td>
                  </tr>
                ))}
              </tbody>

            </table>
        </main>
      )
    }
}

ReactDOM.render(<ProjetoCursos/>, document.getElementById('root'));

