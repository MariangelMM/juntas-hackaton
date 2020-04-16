import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Sass/style.css';

const Header = () => {
    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <img src="https://i.imgur.com/ESXUlFL.png" alt="imagen" />

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-row-reverse " id="navbarNavAltMarkup">
                    <div class="navbar-nav font">
                        <Link class="nav-item nav-link active m-3" to="/">Inicio <span class="sr-only">(current)</span></Link>
                        <Link class="nav-item nav-link m-3" to="/loan">Prestamos</Link>
                        <Link class="nav-item nav-link m-3" to="/netword">Red de Emprendedoras</Link>
                        <Link class="nav-item nav-link m-3" to="/improvecommerce">Mejora tu Negocio</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}




export default Header;