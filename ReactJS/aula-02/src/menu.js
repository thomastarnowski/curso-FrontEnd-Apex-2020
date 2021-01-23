// importar o react
import React from 'react';


// classe
class Menu extends React.Component{


  // render
  render(){
    return(
    <nav>
      <a href='/'>Início</a>
      <a href='/sobre'>Sobre</a>
    </nav>)
  }
}

// exportar a classe 
export default Menu;