import React from "react";
import firebase from "../Firebase/firebase";
import { useCollection } from 'react-firebase-hooks/firestore';

import BanksItems from "./banks-items";

const BanksList = ({
    typeDocument,
    numberDocument,
    headingDocument,
    handleAmountRequest,
    handleQuotaNumbers
}) => {

    const [value, loading, error] = useCollection(
        firebase.firestore().collection('Banks'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const calcular = () => {
    }

    return (
        <div>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span> Loading...</span>}
            {value && (
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
                            <BanksItems />
                        </tbody>
                    </table>
                    <section >
                        {console.log(value.docs.filter(doc => console.log(doc.data())))}
                    </section>
                </section>
            )}
            <div>

            </div>
        </div>
    );
};

export default BanksList;
