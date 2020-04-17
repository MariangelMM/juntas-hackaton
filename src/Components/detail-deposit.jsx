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
                    <label htmlFor="">N° de Cuenta donde se realizaría el depósito</label>
                    <input type="text" placeholder="  Escribe aquí" className="input" onChange={accountNumber} />
                    <small>{msgError}</small>
                </div>
                <table>
                    <tr>
                        <td><input className="check" type="checkbox" /></td>
                        <td><p>He leído y acepto <Link className="font text-pink">Términos y Condiciones </Link>
                            y las <Link className="font text-pink">Politicas de uso de datos personales </Link>  de Juntas</p></td>
                    </tr>
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

