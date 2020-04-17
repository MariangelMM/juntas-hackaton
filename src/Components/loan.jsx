import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import BanksList from "./banks-list";
import Header from "./header";

const MainLoan = ({ typeDoc, numberDoc, headingDoc }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [amountRequest, SetAmountRequest] = useState("");
  const [month, setMonth] = useState("");
  const [banks, setBanks] = useState([]);

  const handleAmountRequest = e => {
    SetAmountRequest(e.target.value);
    console.log(amountRequest);
  };

  const numberquotas = e => {
    setMonth(e.target.value);
    //  console.log(headingCommerc)
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
    if (amountRequest < 300 || amountRequest > 10000) {
      alert('no puede :(');
    }
    else if (amountRequest >= 300 && amountRequest <= 999) {
      filterBanks = value.docs.filter(doc => doc.data().minamount === 300)
    } else if (amountRequest >= 1000 && amountRequest <= 1499) {
      filterBanks = value.docs.filter(doc => doc.data().minamount === 1000)
    } else {
      filterBanks = value.docs
    }
    let data = filterBanks.map(doc => doc.data())
    // console.log('map', data)

    const newDataBanks = data.map(element => {
      const tcea = element.tcea;
      const amount = parseInt(amountRequest);
      let interest = amount * tcea / 100;
      interest = Number(interest.toFixed(2))
      let totalCount = amount + interest;
      totalCount = Number(totalCount.toFixed(2))
      let quotaMonth = totalCount / month;
      quotaMonth = Number(quotaMonth.toFixed(2))

      // spread operator
      data = { ...element, total: totalCount, quota: quotaMonth, interes: interest };
      return data;
    })
    setBanks(newDataBanks);
  }

  return (
    <div>
      <Header />
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {value && (
        <div>
          <img src='https://i.imgur.com/QLt7J9I.png' className="img-fluid" alt="banner" />
          <form className="form-loan">
            <div className="form-group">
              <div>
                <label htmlFor="">Monto Solicitado (S/)</label>
                <input className="" type="text" onChange={handleAmountRequest} placeholder="Escribe el Monto" />
              </div>
              <div className="small-loan">
                <small >*El monto mínimo de un préstamo es de S/.300.00</small>
                <small>*El monto máximo de un préstamo es de S/.10000.00</small>
              </div>

            </div>

            <div>
              <label htmlFor="">N° de Cuotas:</label>
              <select className="input" onChange={numberquotas}>
                <option value="">Seleciona</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
            <button className="btn-pink ml-1000" onClick={event => { handleButtonClick(event); getBanks() }}> Continuar</button>
          </form>
          {buttonClicked ? (
              <BanksList
                typeDocument={typeDoc}
                numberDocument={numberDoc}
                headingDocument={headingDoc}
                bank={banks}
                months={month}
                amountsRequest={amountRequest}
              />
            ) : null}
            {}
        </div>
      )}
    </div >
  );
};

export default MainLoan;
