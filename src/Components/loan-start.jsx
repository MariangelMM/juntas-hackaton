import React from 'react';
import Header from '../Components/header';
import { Link } from 'react-router-dom';
import img4 from '../Style/Img/image4.png';

const LoanStart = () => {
    return (
        <div>
            <Header />

            <div className="card mb-3 style">
                <div className="row no-gutters color-yellow ">
                    <div className="col-md-6">
                        <img src={img4} className="card-img" alt="imagen" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body style">
                            <p className="card-text font text-center ">En <strong>Juntas</strong> te ofrecemos <br /> una forma segura, <br /> rápida y accesible de <br /> acceder a un préstamo.</p>
                            <Link className="nav-item nav-link btn-pink-link text-center ml" to="/generalinformation">
                                <strong>Préstamos</strong></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-5">
                <h2 className="font-light text-center">¡Accede a un préstamo en 4 sencillos pasos!</h2>
                <img className="img-fluid m-4" src="https://i.imgur.com/sDRSO9I.png " alt="imagen" />
                <h2 className="font-light m-5">Preguntas más frecuentes</h2>

                <div className="accordion m-5 " id="accordionExample">
                    <div className="card">
                        <div className="card-header bg-white" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ¿Qué es un préstamo financiero? </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                Un préstamo es una operación financiera por la cual una persona (prestamista) otorga mediante un contrato o acuerdo entre las partes, un activo (normalmente una cantidad de dinero) a otra persona (prestatario), a cambio de la obtención de un interés (precio del dinero).
                             </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header bg-white" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cuál es la diferencia entre la TEA y la TCEA? </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                La TEA es la tasa efectiva anual, y la TCEA es la Tasa de Costo Efectivo Anual.
                                La TEA es la tasa por el dinero que la entidad financiera le va a prestar, pero además de esa tasa la empresa le va a cobrar gastos adicionales, como por ejemplo, comisiones. Si incluye estos gastos adicionales en la tasa, entonces usted tendrá la TCEA.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header bg-white" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Cuáles son los requisitos básicos para acceder a un préstamo?  </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Los requisitos son Documento de Identidad y recibo de luz o agua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-5">
                <a href=" https://www.sbs.gob.pe/educacion-financiera/finanzas-para-ti#ft4167" className="font ml-5 text-pink">Ver más información sobre Finanzas</a>
            </div>
            <div className="color-yellow text-center mt-4 font ">
                <h2 className="pt-4">¿Aún tienen dudas?</h2>
                <p>Sabemos que los préstamos pueden parecer riesgosos o generar mucha interrogantes.<br />Por ello puedes comunicarte directamente con un asesor de Juntas para que resuelva todas tus dudas.</p>
                <div className="contact"><p>Central Telefónica: (01) 4445467</p>     <p>Whatsapp: 978912345</p></div>
            </div>

            <div className="text-center m-5 font">
                <h2>Ellas Recomiendan Juntas</h2>
                <img className="img-fluid" src="https://i.imgur.com/WZs7igH.png " alt="imagen" />
            </div>
        </div >
    )
}

export default LoanStart;

