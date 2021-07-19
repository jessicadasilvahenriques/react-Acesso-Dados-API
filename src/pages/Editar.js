
import React from 'react'
import './Adicionar.css'
import '../App.css'
import { useParams } from 'react-router';
import FormularioEditar from '../containers/FormularioEditar';


const Editar = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="Editar">
      <div className="titulo-editar">
        <h3>EDITAR RECEITA</h3>
      </div>
      <FormularioEditar dadosRecolhidos={editarReceita} /*dadosAtualizados={atualizarReceita}*/ />
    </div>


  );


};

/**
      * Adiciona os dados da nova receita ao 'state'
      * @param {*} editaReceita - dados da nova receita, 
      *                        recebidos do Formulário
      */
async function editarReceita(editaReceita) {


  let resposta = await fetch("https://localhost:44389/api/ReceitasAPI/"+editaReceita.iDreceita, {
    method: "GET",
    mode: "cors"
  });

  if (!resposta.ok) {
    // não obtivemos o 'código de erro' HTTP 200
    console.error(resposta);
    throw new Error('não foi possível enviar os dados da nova receita. Código= ' + resposta.status);
  }

  // devolver os dados a serem usados na componente 
  return await resposta.json();
}

async function atualizarReceita(editaReceita) {

  let formData = new FormData();
  formData.append("Descricao", editaReceita.nome);
  formData.append("Ingredientes", editaReceita.ingredientes);
  formData.append("ModoPreparo", editaReceita.modoPreparo);
  formData.append("AutorFK", 1);

  let resposta = await fetch("https://localhost:44389/api/ReceitasAPI/"+editaReceita.iDreceita, {
    method: "PUT",
    body: formData,
    mode:"cors"
  });

  if (!resposta.ok) {
    // não obtivemos o 'código de erro' HTTP 200
    console.error(resposta);
    throw new Error('não foi possível enviar os dados da nova receita. Código= ' + resposta.status);
  }

  // devolver os dados a serem usados na componente 
  return await resposta.json();
}





export default Editar