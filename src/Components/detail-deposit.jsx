import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
            <h3>¡Ya estas por terminar!</h3>
            <form action="">
                <label htmlFor="">N° de Cuenta donde se realizara el deposito</label>
                <input type="text" onChange={accountNumber} />
                <small>{msgError}</small>

                <input type="checkbox" />
                <label htmlFor="">He leido y acepto Terminos y Condiciones y las politicas de uso de datos personales de Juntas</label>

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

