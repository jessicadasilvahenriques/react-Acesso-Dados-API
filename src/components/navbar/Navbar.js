import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from "../../assets/logo_branco.png";

function Navbar() {
    const navStyle = {
        color:'white'
    };

    return (
            <nav>
                <div className="logo"><img src={logo} width = "250" height = "45" overflow = "hidden" alt=""/></div>
                <ul className="nav-links">
                    <Link style={navStyle} to='/'>
                        <li>PÁGINA INICIAL</li>
                    </Link>
                    <Link style={navStyle} to='/adicionar'>
                        <li>ADICIONAR RECEITAS</li>
                    </Link>
                    <Link style={navStyle} to='/lista'>
                        <li>LISTA DE RECEITAS</li>
                    </Link>
                    <Link style={navStyle} to='/login'>
                        <li>LOGIN</li>
                    </Link>
                </ul>
            </nav>
        );
}

export default Navbar