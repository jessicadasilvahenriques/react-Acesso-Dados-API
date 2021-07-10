// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';

import Routes from '../components/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';


// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {

  render(){
    return (
          <Routes />
        )
  }

}

// um componente só é acessível se for 'exportado'
export default App;