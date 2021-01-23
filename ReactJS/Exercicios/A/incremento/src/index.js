import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      show: true
    };
  }

  Incrementar = () => {
    this.setState({ indice: this.state.indice + 1 });
  }
  Decrementar = () => {
    if(this.state.indice >0){
    this.setState({  indice: this.state.indice - 1 });
  }}
 

  render() {
    return (
      <div>
        <button onClick={this.Incrementar}>Incrementar</button>
        <button onClick={this.Decrementar}>Decrementar</button>
        { this.state.show ? <h2>{ this.state.indice }</h2> : '' }
      </div>
    );
  }
}
ReactDOM.render( < App / > , document.getElementById('root'));