import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import DetailsItems from './details-items';

const BanksItems = (props) => {
  // console.log(props.getsBanks);
  const [buttonClickedRequest, setButtonClickedRequest] = useState(false);
  const { image,name, tcea, total, quota, interes } = props.getsBanks;
  const handleButtonClickRequest = event => {
    event.preventDefault();
    setButtonClickedRequest(true);
  };
  return (
    <React.Fragment >
        <tr>
          <td><img src={image} className="imagen" alt="banco" /></td>
          <td>{props.month}</td>
          <td>{quota}</td>
          <td>{tcea}</td>
          <td>{interes}</td>
          <td>{total}</td>
          <td>
            <button onClick={event => { handleButtonClickRequest(event); }}>
              {" "}
              Ver Requisitos
            </button>
            <Link
              to={{
                pathname: '/requisitos', state: {
                name,
                month: props.month,
                quota,
                tcea,
                total
                }
              }}
            >  Solicitar </Link>

          </td>
        </tr>
        <tr>
          {buttonClickedRequest ? (<DetailsItems />
          ) : null}
          {}
        </tr>
    </React.Fragment >
  );
}

export default BanksItems;
