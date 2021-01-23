// Executar servidor: npm start
import React from 'react';
import ReactDOM from 'react-dom';

class CicloVida extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      corPrimaria: 'Vermelho'
    }
  }


  // alterar o valor do state atraves do props
  // static getDerivedStateFromProps(props, state){
// return {corPrimaria: props.cor}
  // }

  componentDidMount(){
    setTimeout(() => {
    this.setState({corPrimaria: 'Amarelo'})
  }, 2000);
}
  render(){
    return(
      <div>
        <h1>{this.state.corPrimaria}</h1>
      </div>
    )
  }
}



ReactDOM.render(<CicloVida cor='Azul' />, document.getElementById('root'));