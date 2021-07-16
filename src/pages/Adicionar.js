
import React from 'react'
import Formulario from "../containers/Formulario";
import './Adicionar.css'
import '../App.css'

const Adicionar = () => {
  return (
    <div className="Adicionar">
      <div className="titulo-adicionar">
        <h3>ADICIONAR RECEITA</h3>
      </div>
      <Formulario dadosRecolhidos={adicionaReceita} />
    </div>


  );


};

/**
      * Adiciona os dados da nova receita ao 'state'
      * @param {*} novaReceita - dados da nova receita, 
      *                        recebidos do Formulário
      */
async function adicionaReceita(novaReceita) {

  let formData = new FormData();
  formData.append("Descricao", novaReceita.nome);
  formData.append("Ingredientes", novaReceita.ingredientes);
  formData.append("ModoPreparo", novaReceita.modoPreparo);
 // formData.append("Fotografia", novaReceita.fotografia);
  

  let resposta = await fetch("api/ReceitasAPI", {
    method: "POST",
    body: formData
  });

  if (!resposta.ok) {
    // não obtivemos o 'código de erro' HTTP 200
    console.error(resposta);
    throw new Error('não foi possível enviar os dados da nova receita. Código= ' + resposta.status);
  }

  // devolver os dados a serem usados na componente 
  return await resposta.json();
}






export default Adicionar