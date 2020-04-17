import React from 'react';
import Header from '../Components/header';
import img1 from '../Style/Img/Finanzas1.jpg';
import img2 from '../Style/Img/Finanzas2.jpg';
import img3 from '../Style/Img/Finanzas3.jpg';
import img4 from '../Style/Img/Ventas1.png';
import img5 from '../Style/Img/Ventas2.jpg';
import img6 from '../Style/Img/Ventas3.png';
import img7 from '../Style/Img/DesarrolloPersonal1.jpg';
import img8 from '../Style/Img/DesarrolloPersonal2.jpg';


const ImproveCommerce = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="color-yellow text-center font m-5">
                <h1 >En <strong>Juntas</strong> nos importas TU. <br /> Por ello recopilamos los mejores cursos para <br /> desarrollar tus habilidades, conocimientos y hacer <br /> crecer tu negocio</h1>
            </div>
            <div>
                <h2 className="font m-5">Finanzas</h2>
                <div class="card-group m-4">
                    <div class="card m-3">
                        <img src={img1} class="card-img-top " alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Finanzas</h5>
                            <p class="card-text m-4">Universidad Pompeu Fabra</p>
                            <a className="btn-pink-link m-3" href="https://www.estudiarporinternet.info/2015/12/curso-online-gratis-certificado-finanzas.html">Ir al Curso</a>
                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Finanzas para emprendedores y no Financieros</h5>
                            <p class="card-text m-4">IEBS Business School</p>
                            <a className="btn-pink-link m-3" href="https://www.youtube.com/watch?v=UPA1f6dY7OM">Ir al Curso</a>
                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title m-4">Educación financiera para principiantes</h5>
                            <p class="card-text">Yokoi Kejin</p>
                            <a className="btn-pink-link m-3" href="https://www.youtube.com/watch?v=g_v1ipHSQa0">Ir al Curso</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font m-5">Ventas</h2>
                <div class="card-group m-4">
                    <div class="card m-3">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Técnicas de Ventas</h5>
                            <p class="card-text m-4">Cibertc</p>
                            <a className="btn-pink-link m-3" href="https://www.cibertec.edu.pe/cursos-cortos/gestion/gestion-empresarial/tecnicas-de-ventas/">Ir al Curso</a>

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img6} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title m-4">Gestion de Ventas</h5>
                            <p class="card-text">UPC</p>
                            <a className="btn-pink-link m-3" href=" https://postgrado.upc.edu.pe/cursos-especializados-marketing/gestion-de-ventas?__cf_chl_jschl_tk__=a57c27f830200297201fc88b66f795af9b2d78e4-1587098791-0-AcuBqVK-LzmmMo93pGbWk0RdaLTCBYuqzjqp4Dvaj_ivbcy9M4gnYry4vq0sht3MnVtDiTqwrF7gQh6AcM2po3-1Gtmwxsqr2pYMwTlGzlYXCDE9YLn0aGGTNro-h5ZGJ1unsK1XxnZt1IhwL6K464pa-0IdPzs_y07URv_VZYqucNMz7S6Omvfq08Og72yRfeQu4xNp8PipeWxA0QjbU0gV2z3gt-LPeY4nXHRCPIEUNhLzXMlbYQumOd7UocX8rRu5i3zqSPMPokEPh8hUMPfB3-9UBY-PCEy0TEWaOmgZnoJcfs6495tI3W3RJ6ppczoiTlHh4umSeJAv_kciwI4">Ir al Curso</a>
                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img8} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Estrategias y técnicas de ventas</h5>
                            <p class="card-text m-4">Esan</p>
                            <a className="btn-pink-link m-3" href=" https://www.esan.edu.pe/pee/areas/marketing/estrategias-y-tecnicas-de-venta/">Ir al Curso</a>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="font m-5">Desarrollo Personal</h2>
                <div class="card-group m-4">
                    <div class="card m-3">
                        <img src={img7} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Desarrollo Personal</h5>
                            <p class="card-text m-4">PUCP</p>
                            <a className="btn-pink-link m-3" href=" http://facultad.pucp.edu.pe/gestion-direccion/sumillas-licenciatura/desarrollo-personal/">Ir al Curso</a>

                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Desarrollo Personal</h5>
                            <p class="card-text m-4">Eduteam</p>
                            <a className="btn-pink-link m-3" href=" https://ed.team/cursos/desarrollo-personal">Ir al Curso</a>
                        </div>
                    </div>
                    <div class="card m-3">
                        <img src={img7} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title m-4">Curso de coaching y Desarrolo Personal</h5>
                            <p class="card-text">Editin Academy</p>
                            <a className="btn-pink-link m-3" href=" https://edutin.com/curso-de-coaching-4256">Ir al Curso</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default ImproveCommerce;