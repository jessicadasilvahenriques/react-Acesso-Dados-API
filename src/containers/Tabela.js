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
                <th>Fotografia</th>
            </tr>
        </thead>
    )
}

// definição da função que devolve o Corpo da tabela
// faz exatamente o mesmo da linha 7
const CorpoTabela = (props) => {
    // esta função 'interna' irá ler e processar todos
    // os objetos definidos dentro do array 'dadosRecebidos'
    const rows = props.dadosRecebidos.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.ingredientes}</td>
                <td>{row.modoPreparo}</td>
                <td>{row.fotografia}</td>
                <td>
                    <button className="btn btn-outline-danger"
                            onClick={()=>props.alunoAremover(index)}
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

        // estamos a ler os dados que são recebidos pelo componente
        // <=> this.props.dadosAlunos
        const { dadosAlunos, aluno } = this.props

        return (
            <table className="table table-striped table-success">
                <CabecalhoTabela />
                {/* o parâmetro 'dadosRecebidos' irá ajudar ao processamento
                    dos dados que vêm da componente 'mãe' */}
                <CorpoTabela dadosRecebidos={dadosAlunos} alunoAremover={aluno} />
            </table>
        )
    }
}


export default Tabela