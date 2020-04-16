import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <head>
            <img src={logo} alt="imagen" />
            <Link>Inicio</Link>
            <Link>Prestamo</Link>
            <Link>Red de Emprendedoras</Link>
            <Link>Mejora tu Negocio</Link>
        </head>
    )
}

export default Header;