import React from 'react';
import Header from '../Components/header';
import { Link } from 'react-router-dom';
import img1 from '../Style/Img/img1.jpg';
import img2 from '../Style/Img/img2.jpg';
import img3 from '../Style/Img/img3.jpg';

const ImproveCommerce = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="color-yellow text-center font m-5">
                <h1 >En <strong>Juntas</strong> nos importas TU. <br /> Por ello recopilamos los mejores cursos para <br /> desarrollar tus habilidades, conocimientos y hacer <br /> crecer tu negocio</h1>
            </div>

            <h2 className="font m-3">Finanzas</h2>
            <div class="card-group m-5">
                <div class="card m-3">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Finanzas</h5>
                        <p class="card-text m-4">Universidad Pompeu Fabra</p>
                        <Link className="btn-pink-link m-3" to="...">Ir al Curso</Link>

                    </div>
                </div>
                <div class="card m-3">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Finanzas para emprendedores y no Financieros</h5>
                        <p class="card-text m-4">IEBS Business School</p>
                        <Link className="btn-pink-link m-3" to="...">Ir al Curso</Link>
                    </div>
                </div>
                <div class="card m-3">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title m-4">Educación financiera para principiantes</h5>
                        <p class="card-text">Yokoi Kejin</p>
                        <Link className="btn-pink-link m-3" to="...">Ir al Curso</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ImproveCommerce;