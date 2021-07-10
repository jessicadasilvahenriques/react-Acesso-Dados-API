// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';

import Routes from '../components/Routes';

// importar o CSS
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * função que irá ler os dados (receitas) da API
 */
async function getReceitas(){
  //ler os dados da API
  let resposta=await fetch('/api/ReceitasAPI');
  
  if (!resposta.ok){
    //não foi recebido o código 200 do HTTP
    console.error("Não conseguimos ler os dados da API. Código: " + resposta.status);
  }
  return await resposta.json();
}

// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {

  

  render(){
 return (
      <Routes />

    )
  }
  
  /**
   * método que sabe identificar a 'receita' que deverá ser retirada da tabela
   * @param {*} index - dados da receita a remover
   */
  removeReceita = (index) => {
    // recuperar as receitas que estão representadas na tabela
    const { receitas } = this.state

    // alterar essa lista, retirando dela a receita identificada pelo 'index'
    this.setState({
      // filter é um método do 'state' que permite aplicar um filtro sobre os 
      // dados do state
      receitas: receitas.filter((receitas, i) => {
        // devolve todos os dados que não forem iguais ao index
        return i !== index
      })
    });
  }

  /**
   * Adiciona os dados da nova receita ao 'state'
   * @param {*} novaReceita - dados da nova receita, 
   *                        recebidos do Formulário
   */
  adicionaAluno = (novaReceita) => {
    this.setState({
        receitas: [...this.state.receitas, novaReceita] 
      // ... é um operador que junta a um array, um novo elemento
    });
  }

 
    )
  }
  

}

// um componente só é acessível se for 'exportado'
export default App;