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
                <div className="logo"><img src={logo} width = "250" height = "45" overflow = "hidden"/></div>
                <ul className="nav-links">
                    <Link style={navStyle} to='/'>
                        <li><a>PÁGINA INICIAL</a></li>
                    </Link>
                    <Link style={navStyle} to='/adicionar'>
                        <li><a>ADICIONAR RECEITAS</a></li>
                    </Link>
                    <Link style={navStyle} to='/lista'>
                        <li><a>LISTA DE RECEITAS</a></li>
                    </Link>
                    <Link style={navStyle} to='/login'>
                        <li><a>LOGIN</a></li>
                    </Link>
                </ul>
            </nav>
        );
}

export default Navbar