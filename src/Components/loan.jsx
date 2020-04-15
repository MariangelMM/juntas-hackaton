import React, { useState } from "react";
import BanksList from "./banks-list";

const Loan = ({ typeDoc, numberDoc, headingDoc }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [amountRequest, SetAmountRequest] = useState("");
  const [quotaNumbers, setQuotaNumbers] = useState("");

  const handleAmountRequest = e => {
    SetAmountRequest(e.target.value);
    console.log(amountRequest);
  };

  const handleQuotaNumbers = e => {
    setQuotaNumbers(e.target.value);
    console.log(quotaNumbers);
  };

  const handleButtonClick = event => {
    event.preventDefault();

    setButtonClicked(true);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">Monto Solicitado</label>
        <input type="text" onChange={handleAmountRequest} />

        <small>*El monto minimo de un prestamo es de S/.300.00</small>
        <small>*El monto maximo de un prestamo es de S/.10000.00</small>

        <label htmlFor="">Numero de Cuotas</label>
        <input type="text" onChange={handleQuotaNumbers} />

        <button onClick={event => handleButtonClick(event)}> Continuar</button>
        {buttonClicked ? (
          <BanksList
            typeDocument={typeDoc}
            numberDocument={numberDoc}
            headingDocument={headingDoc}
            handleAmountRequest={amountRequest}
            handleQuotaNumbers={quotaNumbers}
          />
        ) : null}
        {}
      </form>
    </div>
  );
};

export default Loan;
