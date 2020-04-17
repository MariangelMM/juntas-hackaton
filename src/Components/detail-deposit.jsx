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
        <div>
            <Header />
            <h4 className='centerH4'>¡Ya estás por terminar!</h4>
            <br/><br/>
            <form action="" className="form-loan">
            <div className="form-group">
                <label htmlFor="">N° de Cuenta donde se realizaría el depósito</label>
                <input type="text"  placeholder="  Escribe aquí" className="input" onChange={accountNumber} />
                <small>{msgError}</small>
                </div>
                <table>
                <tr>
                    <td><input className="chkW-H" type="checkbox" /></td>
                    <td><p>He leído y acepto <button className="termYCon">Términos y Condiciones</button>
                     y las <button className="termYCon">políticas de uso de datos</button> <br /><button className="termYCon1">personales</button> de Juntas</p></td>
                </tr>
                </table>

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
            </form>
        </div>
    )

}
export default DetailDeposit;

