// Tabela.js
// ****************************************************** 

import React from 'react'

// função que devolve o Cabeçalho da tabela
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Ingredientes</th>
                <th>Modo de Preparo</th>
               
            </tr>
        </thead>
    )
}

// definição da função que devolve o Corpo da tabela
// faz exatamente o mesmo da linha 7
const CorpoTabela = (props) => {
    // esta função 'interna' irá ler e processar todos
    // os objetos definidos dentro do array 'dadosRecebidos'
    const rows = props.dadosDasReceitas.map((row, index) => {
        return (
            <tr key={row.iDreceita}>
                <td>{row.descricao}</td>
                <td>{row.ingredientes}</td>
                <td>{row.modoPreparo}</td>
                <td>
                    <button className="btn btn-outline-danger"
                            //onClick={()=>props.receitasAremover(index)}
                    >
                        Apagar Receita
                    </button>
                </td>
            </tr>
        )
    })

    // valor devolvido pela função 'CorpoTabela'
    return (<tbody>{rows}</tbody>)
}

// componente que junta os dois sub-componentes, formando um novo 'componente'
class Tabela extends React.Component {
    
    render() {
        console.log(this.props);
        // estamos a ler os dados que são recebidos pelo componente
        // <=> this.props.dadosAlunos
        const { dadosDasReceitas} = this.props

        return (
            <table className="table table-striped table-success">
                <CabecalhoTabela />
                {/* o parâmetro 'dadosRecebidos' irá ajudar ao processamento
                    dos dados que vêm da componente 'mãe' */}
                <CorpoTabela dadosDasReceitas={dadosDasReceitas}/>
            </table>
        )
    }
}


export default Tabela