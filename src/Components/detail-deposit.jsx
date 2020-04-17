import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Components/header'
import "../Style/Sass/style.css";

const DetailDeposit = (props) => {

    console.log(props.location)

    const propsState = props.location.propsState;

    const [number, setNumber] = useState('');


    const [msgError, setMsjError] = useState('');

    const accountNumber = e => {
        setNumber(e.target.value);
        console.log(number);
    };

    const accountNumberTlf = e => {
        setNumber(e.target.value);
        console.log(number);
    };

    const validateAccountNumber = (event) => {
        let msgError = '';
        if (typeof (number) !== 'number' && number.length <= 11) {
            msgError = 'El número de cuenta no es válido';
        }
        if (msgError) {
            event.preventDefault();
            setMsjError(msgError)
        }
    }

    return (
        <div className="font">
            <Header />
            <h2 className="font-light text-center m-5">¡Accede a un préstamo en 4 sencillos pasos!</h2>
            <img
                className="img-fluid"
                src="https://i.imgur.com/coPWeOx.png"
                alt="imagen"
            />

            <h4 className="text-center mb-4">¡Ya estás por terminar!</h4>
            <form action="" className="form-loan">
                <div className="form-group">
                    <label htmlFor="">N° de Cuenta donde se <br />realizaría el depósito</label>
                    <input type="text" placeholder="Escribe aquí" className="input" onChange={accountNumber} />
                    <small>{msgError}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">N° de Teléfono / Celular</label>
                    <input type="text" placeholder="Escribe aquí" className="input" onChange={accountNumberTlf} />
                    <small>{msgError}</small>
                </div>
                <table>
                    <tr>
                        <td><input className="check" type="checkbox" /></td>
                        <td><p>He leído y acepto <Link className="font text-pink" data-toggle="modal" data-target="#exampleModalScrollable">Términos y Condiciones </Link>
                            y las <Link className="font text-pink" data-toggle="modal" data-target="#exampleModalScrollable2">Politicas de uso de datos personales </Link>  de Juntas</p></td>
                    </tr>
                    {/* <!--Modal --> */}
                    <div class="modal fade font" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalScrollableTitle">Términos y Condiciones</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    El usuario se obliga a abstenerse de utilizar el sitio web y los servicios con fines ilícitos, lesivos de los derechos e intereses de terceros, o de modo tal pueda dañar, inutilizar, sobrecargar o deteriorar el portal y los servicios, o impedir su normal utilización o disfrute. El sitio web se reserva el derecho a denegar el acceso al sitio web y/o a los servicios, en cualquier momento y sin necesidad de preaviso, a aquellos usuarios que incumplan las condiciones de uso. El usuario responderá de los daños y perjuicios de toda naturaleza que el sitio web pueda sufrir, directa o indirectamente, como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de las condiciones de uso o de la ley, en relación con la utilización del sitio web. Acceso al sitio web y a su contenido. La empresa procurara proveer al usuario un acceso ininterrumpido al sitio web, mas no asegura que eso suceda siempre, por lo cual no se hace responsable del termino, suspensión o restriccion del acceso al sitio web en cualquier momento. El sitio web cambia regularmente. La empresa hace el mayor esfuerzo razonable para asegurar que el contenido del sitio web este actualizado y libre de errores, razón por la cual realiza actualizaciones diariamente, las cuales no es posible de notificar al usuario en cada uno de ellas. Derechos de propiedad intelectual. Los logos denotados con ® son marcas registradas de la empresa. La empresa es una marca registrada y no se puede usar sin permiso por escrito de la empresa. La empresa también posee los derechos de propiedad intelectual y las licencias sobre el sitio web, las cuales incluyen el software usado para correr el sitio web y todo el material que se publicita en el mismo. El usuario acepta que la empresa disponga de su propiedad intelectual para su uso personal únicamente. El usuario no debe copiar, alterar, modificar, vender, distribuir, publicitar o crear un trabajo deliberado a partir de cualquier material publicado o creado por el sitio web, sin permiso por escrito.
                                   </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn-pink-link" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade font" id="exampleModalScrollable2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalScrollableTitle">Política de Uso de Datos</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Esta sección explica qué información recogemos sobre el usuario, cómo la recogemos, como la almacenamos y como la podemos utilizar en las circunstancias en que la ofrecemos a terceros. Para aprovechar las ventajas de algunos de los servicios ofrecidos a través de nuestro sitio web podría ser necesario que nos proporcione cierta información sobre usted. Esto puede incluir hacer el registro de sus datos de contacto o completar algunos formularios en nuestra página web. Es posible que también le pidamos que proporcione información acerca de usted, si desea participar en cualquier debate en las preguntas y respuestas, entrar en cualquier servicio que ofrecemos o utilizar un buscador o comparador en nuestra página web, o si decide ponerse en contacto con nosotros por cualquier motivo. La naturaleza de nuestro servicio es tal que podemos, en ocasiones, también solicitar que proporcione datos personales (como número de documento, nombre y apellido, su estado laboral, crediticio y otros datos adicionales). Cuando lo hacemos, vamos a pedir su consentimiento explícito a la utilización de dichos datos personales. Cuando usted acepta proporcionar esta información vamos a tomar las medidas adecuadas para proteger dichos datos de índole personal.
                                   </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn-pink-link" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </table>
                <div className="m-5">
                    <Link
                        to={{
                            pathname: "/loandetail",
                            propsState,
                        }}
                        className="btn-pink-link ml-1000"
                        onClick={event => {
                            validateAccountNumber(event);
                        }}
                    >
                        CONTINUAR
                    </Link>
                </div>
            </form>
        </div>
    )

}
export default DetailDeposit;


