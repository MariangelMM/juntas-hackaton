import React, { useState } from 'react';
import LoanDetail from './loan-detail';

const DetailDeposit = () => {

    const [number, setNumber] = useState('');

    const [buttonClicked, setButtonClicked] = useState(false);

    const accountNumber = e => {
        setNumber(e.target.value);
        console.log(number);
    };


    const handleButtonClick = event => {
        event.preventDefault();
        setButtonClicked(true);
    };

    const validateAccountNumber = () => {
        let msgError = '';
        if (typeof (number) !== 'number' && number.length <= 11) {
            msgError = <small>El numero de cuenta no es valido y/o debe ser un numero</small>
        }
        return msgError;
    }

    return (
        <div>
            <h3>¡Ya estas por terminar!</h3>
            <form action="">
                <label htmlFor="">N° de Cuenta donde se realizara el deposito</label>
                <input type="text" onChange={accountNumber} />

                <input type="checkbox" />
                <label htmlFor="">He leido y acepto Terminos y Condiciones y las politicas de uso de datos personales de Juntas</label>


                <button onClick={event => { handleButtonClick(event) }}>
                    {" "}
                    SOLICITAR PRESTAMO
                     </button>
                {buttonClicked ? (
                    validateAccountNumber() ? (<small>El numero de cuenta no es valido y/o debe ser un numero</small>) :
                        <LoanDetail />
                ) : null}
                {}

            </form>
        </div>
    )

}
export default DetailDeposit;