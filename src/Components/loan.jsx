import React, { useState } from "react";

import firebase from "../Firebase/firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import BanksList from "./banks-list";

const Loan = ({ typeDoc, numberDoc, headingDoc }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [amountRequest, SetAmountRequest] = useState("");
  const [month, setMonth] = useState("");
  const [banks, setBanks] = useState([]);

  const handleAmountRequest = e => {
    SetAmountRequest(e.target.value);
    console.log(amountRequest);
  };

  const handleQuotaNumbers = e => {
    setMonth(e.target.value);
    console.log(month);
  };

  const handleButtonClick = event => {
    event.preventDefault();

    setButtonClicked(true);
  };


  const [value, loading, error] = useCollection(
    firebase.firestore().collection('Banks'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  const getBanks = () => {
    let filterBanks = [];
    if (amountRequest >= 300 && amountRequest <= 999) {
      filterBanks = value.docs.filter(doc => doc.data().minamount === 300)
    } else if (amountRequest >= 1000 && amountRequest <= 1499) {
      filterBanks = value.docs.filter(doc => doc.data().minamount === 1000)
    } else {
      filterBanks = value.docs.data().minamount
    }
    const data = filterBanks.map(doc => doc.data())
    // console.log('map', data)
    setBanks(data);
  }



  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {value && (
        <div>
          <form action="">
            <label htmlFor="">Monto Solicitado</label>
            <input type="text" onChange={handleAmountRequest} />

            <small>*El monto minimo de un prestamo es de S/.300.00</small>
            <small>*El monto maximo de un prestamo es de S/.10000.00</small>

            <label htmlFor="">Numero de Cuotas</label>
            <input type="text" onChange={handleQuotaNumbers} />

            <button onClick={event => { handleButtonClick(event); getBanks() }}> Continuar</button>
            {buttonClicked ? (
              <BanksList
                typeDocument={typeDoc}
                numberDocument={numberDoc}
                headingDocument={headingDoc}
                bank={banks}
                months={month}
              />
            ) : null}
            {}
          </form>
        </div>
      )}
    </div >
  );
};

export default Loan;
