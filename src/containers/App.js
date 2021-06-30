// App.js
// Esta classe será o ponto de partida da nossa aplicação
//************************************************************* */ 

// importar da pasta 'node_modules' a package do React 
import React from 'react';

// importar os componentes 'Tabela' e 'Formulario'
import Tabela from './Tabela'
import Formulario from './Formulario'

// importar o CSS
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * função que irá ler os dados (receitas) da API
 */
async function getReceitas(){
  //ler os dados da API
  let resposta=await fetch('/api/ReceitasAPI');
  
  if (!resposta.ok){
    //não foi recido o código 200 do HTTP
    console.error("Não conseguimos ler os dados da API. Código: " + resposta.status);
  }
  return await resposta.json();
}
// cria o 'componente' App
// neste caso é criada uma FUNÇÃO
class App extends React.Component {

  /**
   *Construtor da classe -> tem sempre este nome 
   * 
   */

   constructor(props){
      super(props); // esta é sempre a primeira instrução

      this.state = {
        /**
        * array que irá conter os dados das fotos, vindas da API
        */
        receitas: []
      }
   }

   /**
    * Quando o objeto é criado, executa o código aqui escrito
    * Vamos usá-lo para carregar os dados da API
    */
   componentDidMount(){
     this.LoadReceitas();
   }

   /***
    * Carrega as receitas da API e adiciona-as ao array 'receitas'
    */
  async LoadReceitas(){
     /**
      * Tarefas:
      * 1- Ler os dados da API
      * 2- Atualizar os dados na var. state
      */
    try{
      let receitasVindasAPI = await getReceitas();
      this.setState({receitas: receitasVindasAPI});
    }catch (error){
      console.error("Erro na leitura das receitas da API",error)
    }
  }
  render(){
    const{receitas} = this.state;
    return (
      <div className="container">
        <h1>RECEITAS</h1>
        <h4>Adicionar receita</h4>
        {/* este Formulário irá receber os dados de um novo aluno */}
        {/* o parâmetro 'dadosRecolhidos' é um parâmetro de 'saída'.
            I.e., serve para retirar do 'Formulário' os dados que foram lá recolhidos */}
        <Formulario dadosDasReceitas={this.adicionaAluno} />
        <br />
        
        <h4>Lista de receitas</h4>
        <br />
        {/* 'dadosAlunos' é uma variável de entrada no componente
              Naturalmente, do lado do componente existirá um parâmetro para receber estes dados */}
        {/*  {alunos} - 'alunos' será o nome dos dados
                        está escrita entre chavetas {} pq é a forma de se aceder ao
                        conteúdo de variáveis, dentro do JSX */}
        {/* este componente - Tabela - irá apresentar os dados das 'fotos' no ecrã*/}
        <Tabela dadosDasReceitas={receitas} />
      </div>
    )
  }
  
  /**
   * método que sabe identificar o 'aluno' que deverá ser retirado da tabela
   * @param {*} index - dados do aluno a remover
   */
  removeReceita = (index) => {
    // recuperar os alunos que estão representados na tabela
    const { receitas } = this.state

    // alterar essa lista, retirando dela o aluno identificado pelo 'index'
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
   * Adiciona os dados do novo aluno ao 'state'
   * @param {*} novaReceita - dados do novo aluno, 
   *                        recebidos do Formulário
   */
  adicionaAluno = (novaReceita) => {
    this.setState({
        receitas: [...this.state.receitas, novaReceita] 
      // ... é um operador que junta a um array, um novo elemento
    });
  }
}

// um componente só é acessível se for 'exportado'
export default App;