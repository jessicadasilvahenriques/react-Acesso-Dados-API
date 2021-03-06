// Formulario.js
// este ficheiro irá conter o código para
// representar o formulário no ecrã
// ***************************************************


import React from 'react'




class FormularioEditar extends React.Component {

    // criar objeto que irá receber os dados da nova receita
    editaReceita = {
        nome: "",
        ingredientes: "",
        modoPreparo: "",
        
    }

    // adicionar este novo objeto ao 'state'
    state = this.editaReceita;

    /**
     * handler para manipular os dados escritos pelo
     * utilizador nas textboxs do formulário
     * @param {*} evento - contém os dados escritos pelo utilizador
     */
    handlerAdicao = (evento) => {
        // ler os dados contidos no 'evento'
        // e atribuí-los às variáveis name e value
        // name - nome do objeto que foi manipulado
        // value - o conteúdo da textbox
        const { name, value } = evento.target;

        // atribuir os dados lidos à 'state'
        this.setState({
            [name]: value
        });
    }

    /**
     * função que irá exportar os dados para fora do Formulário
     */
    submitEditForm = () => {
        // atribuir ao parâmetro de 'saída'-dadosAtualizados- o conteúdo do state
       // this.props.dadosAtualizados(this.state);      
        this.setState(this.editaReceita);
    }

    render() {
        const { nome, ingredientes, modoPreparo} = this.state;

        return (
            // o 'return' só consegue devolver UM objeto
            <div className="formularioEditar">
            <form>
                Nome: <input type="text"
                    className="form-control"
                    name="nome"
                    value={nome}
                    onChange={this.handlerAdicao}
                /><br />
                Ingredientes: <input type="text"
                    className="form-control"
                    name="ingredientes"
                    value={ingredientes}
                    onChange={this.handlerAdicao}
                /><br />
                Modo de Preparo: <input type="text"
                    className="form-control"
                    name="modoPreparo"
                    value={modoPreparo}
                    onChange={this.handlerAdicao}
                /><br />
               
                <input type="button"
                    className="btn btn-primary"
                    value="Editar"
                    onClick={this.submitEditForm}
                />
            </form>
            </div>
        )
    }
}

export default FormularioEditar;