// Executar servidor: npm start
import React from 'react';
import ReactDOM from 'react-dom';

class Propriedades extends React.Component{
  render(){
    return(
      <div>
        <h1>Aluno: {this.props.nome}</h1>
        <h2>Curso: {this.props.curso}</h2>
      </div>
    )
  }
}



ReactDOM.render(<Propriedades nome='Thomas' curso='ReactJS' />, document.getElementById('root'));