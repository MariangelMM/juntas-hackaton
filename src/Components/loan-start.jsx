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
                            <p className="card-text font text-center ">En <strong>Juntas</strong> te ofrecemos <br /> una forma segura, <br /> rapida y accesible de <br /> acceder a un préstamo.</p>
                            <Link className="nav-item nav-link btn-pink-link text-center ml" to="/generalinformation">
                                <strong>Prestamos</strong></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className="img-fluid" src="https://i.imgur.com/J8hfANO.png" alt="imagen" />
                <h1 className="font-title m-5">Preguntas más frecuentes</h1>

                <div className="accordion m-5" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ¿Qué es un préstamo financiero? </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cuál es la diferencia entre la TEA y la TCEA? </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿Cuáles son los requisitos básicos para acceder a un préstamo?  </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link className="font m-5 text-danger">Ver más información sobre Finanzas</Link>

            <div className="color-yellow text-center mt-4 font">
                <h2>¿Aún tienen dudas?</h2>
                <p>Sabemos que los préstamos pueden parecer riesgosos o generar mucha interrogantes.<br />Por ello puedes comunicarte directamente con un asesor de Juntas para que resuelva todas tus dudas.</p>
                <p>Central Telefónica: (01) 4445467     Whatsapp: 978912345</p>
            </div>

            <div className="text-center m-5 font">
                <h2>Ellas Recomiendan Juntas</h2>
                <img className="img-fluid" src="https://i.imgur.com/J8hfANO.png" alt="imagen" />
            </div>
        </div >
    )
}

export default LoanStart;

