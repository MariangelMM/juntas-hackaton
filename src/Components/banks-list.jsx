import React from "react";

import BanksItems from "./banks-items";

const BanksList = ({
    typeDocument,
    numberDocument,
    headingDocument,
    bank,
    months
}) => {

    console.log('tabla bancos', months)
    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <td>Banco/Entidad</td>
                            <td>Cuota Mensual</td>
                            <td>TCEA</td>
                            <td>Monto Total</td>
                            <td>Mas Informacion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {bank.map(element => <BanksItems getsBanks={element} key={element.name} month={months} />)}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default BanksList;
