import React from 'react'
import ReactDOM from 'react-dom'

// class
class Api extends React.Component{

  // constructor
  constructor(){
    super();

    this.state = ({
      dados: []
    })
  }

  // apos componente ser renderizado
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(retorno => retorno.json())
    .then(retorno => this.setState({dados : retorno}))
  }

  // função obter dados
  obterDados(indice){
    console.log(this.state.dados[indice]);
  }

  // render
    render(){
      return (
        <table>
            <thead>
               <tr>
                 <th>Codigo</th>
                 <th>Nome</th>
                 <th>Email</th>
                 <th>Selecionar</th>
               </tr>
            </thead>

          <tbody>
            {this.state.dados.map((pessoa, linha) => (
              <tr key={linha}>
              <td>{pessoa.id}</td>
              <td>{pessoa.name}</td>
              <td>{pessoa.email}</td>
              <td><button onClick={() => (this.obterDados(linha))}>Selecionar</button></td>
            </tr>
            ))}
            
          </tbody>
       </table>
    )
  }

}


// Exportar componente
ReactDOM.render(<Api />, document.getElementById('root'));