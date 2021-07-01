// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';

// importar os componentes 'Tabela' e 'Formulario'
/* import Tabela from './Tabela'
import Formulario from './Formulario' */
import Routes from '../components/Routes';

// importar o CSS
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