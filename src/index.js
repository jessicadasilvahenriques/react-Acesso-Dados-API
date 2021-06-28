// index.js
//************************************/

//biblioteca para o funcionamento do React
import React from 'react'
//biblioteca para o manipulamento do DOM
import ReactDOM from 'react-dom'

import App from './containers/App';
import Navbar from './components/navbar/Navbar';


import 'normalize.css'
// importa o CSS para dentro do projeto
import './index.css'
//invocaçao do que deve ser atualizado na interface

ReactDOM.render(<Navbar/>, document.getElementById('Navbar'))

ReactDOM.render(<App />, document.getElementById('root'))

