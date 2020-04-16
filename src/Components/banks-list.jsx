import React from "react";

import BanksItems from "./banks-items";

const BanksList = ({
    typeDocument,
    numberDocument,
    headingDocument,
    amountsRequest,
    bank,
    months,
}) => {

    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <td>Banco/Entidad</td>
                            <td>Numero de Cuotas</td>
                            <td>Cuota Mensual</td>
                            <td>TCEA</td>
                            <td>Intereses</td>
                            <td>Monto Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {bank.map(element => (
                            <BanksItems
                                getsBanks={element}
                                key={element.name}
                                month={months}
                                amountRequest={amountsRequest}
                            />
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default BanksList;
