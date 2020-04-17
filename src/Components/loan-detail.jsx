import React from "react";

const LoanDetail = (props) => {

    console.log('detalles', props.location.propsState)

    const { month, name, quota, tcea, total, amountrequest } = props.location.propsState;

    return (
        <div>
            <div>
                <h2>¡Haz completado exitosamente tu solicitud de préstamo!</h2>
                <i className="fas fa-check"></i>
                <h4>
                    Detro de las siguientes 24 horas se contactara un ejecutivo para
                    informarte sobre el resultado de tu solicitud de prestamo
        </h4>
            </div>
            <h4>
                A continuacion te brindamos la informacion de tu detalle de préstamo
      </h4>
            <table>
                <thead>
                    <tr>
                        <td>Detalle del Préstamo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Entidad Bancaria</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Moneda de Crédito</td>
                        <td>Soles</td>
                    </tr>
                    <tr>
                        <td>Monto a Financiar</td>
                        <td>{amountrequest}</td>
                    </tr>
                    <tr>
                        <td>Tasa de Costo Efectivo Anual(TCEA)</td>
                        <td>{tcea}</td>
                    </tr>
                    <tr>
                        <td>Cuota Mensual</td>
                        <td>{quota}</td>
                    </tr>
                    <tr>
                        <td>Plazo del Credito </td>
                        <td>{month}</td>
                    </tr>
                    <tr>
                        <td>Monto Total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
            <button> Descargar <i className="fas fa-download"></i></button>
            <button>Finalizar</button>
        </div>
    );
};

export default LoanDetail;
