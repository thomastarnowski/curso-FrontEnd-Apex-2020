import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './inicio';
import Sobre from './sobre';
import Menu from './menu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



// class
class Principal extends React.Component{




  // render
    render(){
      return (
        <div>

          <Menu />

          <BrowserRouter>
            <Switch>
              <Route path='/' exact={true} component={Inicio}></Route>
              <Route path='/sobre' component={Sobre}></Route>
            </Switch>
          </BrowserRouter>
        </div>
    )
  }

}


// Exportar componente
ReactDOM.render(<Principal />, document.getElementById('root'));