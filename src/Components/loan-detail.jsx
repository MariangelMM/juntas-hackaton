import React from "react";

const LoanDetail = () => {
    return (
        <div>
            <div>
                <h2>¡Haz completado exitosamente tu solicitud de prestamo!</h2>
                <i class="fas fa-check"></i>
                <h4>
                    Detro de las siguientes 24 horas se contactara un ejecutivo para
                    informarte sobre el resultado de tu solicitud de prestamo
        </h4>
            </div>
            <h4>
                A continuacion te brindamos la informacion de tu detalle de pretamo
      </h4>
            <table>
                <thead>
                    <tr>
                        <td>Detalle del Prestamo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Entidad Bancaria</td>
                        <td>Mi Banco</td>
                    </tr>
                    <tr>
                        <td>Moneda de Credito</td>
                        <td>Soles</td>
                    </tr>
                    <tr>
                        <td>Monto a Financiar</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Tasa de Costo Efectivo Anual(TCEA)</td>
                        <td>45.67</td>
                    </tr>
                    <tr>
                        <td>Cuota Mensual</td>
                        <td>354</td>
                    </tr>
                    <tr>
                        <td>Plazo del Credito </td>
                        <td>24 Meses</td>
                    </tr>
                    <tr>
                        <td>Monto Total</td>
                        <td>12332</td>
                    </tr>
                </tbody>
            </table>
            <button> Descargar <i class="fas fa-download"></i></button>
            <button>Finalizar</button>
        </div>
    );
};

export default LoanDetail;
