// Tabela.js
// ****************************************************** 

import React from 'react'
import Table from 'react-bootstrap/Table'

// função que devolve o Cabeçalho da tabela
function CabecalhoTabela() {
    return (
        <thead>
           
            <tr>
                <th>Nome</th>
                <th>Ingredientes</th>
                <th>Modo de Preparo</th>
                <th>Fotografias</th>
            </tr>
           
        </thead>
    )
}

// definição da função que devolve o Corpo da tabela
const CorpoTabela = (props) => {
    // esta função 'interna' irá ler e processar todos
    // os objetos definidos dentro do array 'dadosDasReceitas'
    var rows
    if (props.dadosDasReceitas) {
        rows = props.dadosDasReceitas.map((row, index) => {
            return (
               
                <tr key={row.iDreceita}>
                    <td>{row.descricao}</td>
                    <td>{row.ingredientes}</td>
                    <td>{row.modoPreparo}</td>
                    <td>{row.fotografia}</td>
                    <td>
                        <button className="btn btn-outline-danger"
                            onClick={() => this.receitasAremover(index)}
                        >
                            Apagar
                        </button>
                        <button  className="btn btn-outline-success" 
                            onClick={() => props.receitasAremover(index)}
                        >
                            Editar
                        </button>
                    </td>
                </tr>
                
            )
        })
    }
    else {
        rows = () => { return (<tr><td></td></tr>) }
    }

    // valor devolvido pela função 'CorpoTabela'
    return (<tbody>{rows}</tbody>)
}

async function getReceitas() {
    //ler os dados da API
    let resposta = await fetch('api/ReceitasAPI');
    if (!resposta.ok) {
        //não foi recebido o código 200 do HTTP
        console.error("Não conseguimos ler os dados da API. Código: " + resposta.status);
    }
    return await resposta.json();
}

// componente que junta os dois sub-componentes, formando um novo 'componente'
class Tabela extends React.Component {

    constructor(props) {
        super(props); // esta é sempre a primeira instrução

        this.state = {
            /**
            * array que irá conter os dados das receitas, vindas da API
            */
            receitas: []
        }
    }

    componentDidMount() {
        this.LoadReceitas();
    }

    async LoadReceitas() {
        /**
         * Tarefas:
         * 1- Ler os dados da API
         * 2- Atualizar os dados na var. state
         */
        try {
            let receitasVindasAPI = await getReceitas();
            this.setState({ receitas: receitasVindasAPI });
        } catch (error) {
            console.error("Erro na leitura das receitas da API", error)
        }
    }

    render() {
        const { receitas } = this.state;
        // estamos a ler os dados que são recebidos pelo componente

        return (
            <table className="table table-striped table-success">
                <CabecalhoTabela />
                {/* o parâmetro 'dadosDasReceitas' irá ajudar ao processamento
                    dos dados que vêm da componente 'mãe' */}
                <CorpoTabela dadosDasReceitas={receitas} receitasAremover={receitas} />
            </table>
        ) 
    }

    removeReceita = (index) => {
        // recuperar os receitas que estão representados na tabela
        const { receitas } = this.state
    
        // alterar essa lista, retirando dela a receita identificado pelo 'index'
        this.setState({
          // filter é um método do 'state' que permite aplicar um filtro sobre os 
          // dados do state
          receitas: receitas.filter((receitas, i) => {
            // devolve todos os dados que não forem iguais ao index
            return i !== index
          })
        });
      }
    
    //   /**
    //    * Adiciona os dados da nova receita ao 'state'
    //    * @param {*} novaReceita - dados da nova receita, 
    //    *                        recebidos do Formulário
    //    */
    //   adicionaReceita = (novaReceita) => {
    //     this.setState({
    //         receitas: [...this.state.receitas, novaReceita] 
    //       // ... é um operador que junta a um array, um novo elemento
    //     });
    //   }
}


export default Tabela