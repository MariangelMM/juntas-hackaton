import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Sass/style.css';

const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light ">

                <img src="https://i.imgur.com/ESXUlFL.png" alt="imagen" />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse " id="navbarNavAltMarkup">
                    <div className="navbar-nav font">
                        <Link className="nav-item nav-link active m-3" to="/">Inicio <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link m-3 btn-yellow" to="/loan">Préstamos</Link>
                        <Link className="nav-item nav-link m-3" to="/netword">Red de Emprendedoras</Link>
                        <Link className="nav-item nav-link m-3" to="/improvecommerce">Mejora tu Negocio</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}




export default Header;