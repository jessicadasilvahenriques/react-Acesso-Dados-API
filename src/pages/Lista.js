import React from 'react'
import Tabela from "../containers/Tabela";
import './Lista.css'

const Lista = () => {     
    return (
      <div className="Lista">
        <div className ="titulo-lista">
          <h3>LISTA DE RECEITAS</h3>
        </div>
        <Tabela />
      </div>
    );
};

export default Lista