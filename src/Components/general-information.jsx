import React, { useState } from "react";
import Loan from "./loan";
import '../Style/Sass/style.css';

const GeneralInformation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [typeDocument, setTypeDocument] = useState("");
  const [numberDocument, setNumberDocument] = useState("");
  const [headingCommerc, setHeadingCommerc] = useState("");

  const numberDoc = e => {
    setNumberDocument(e.target.value);
    // console.log(numberDocument);
  };

  const typeDoc = e => {
    setTypeDocument(e.target.value);
    // console.log(typeDocument)
  };

  const headingDoc = e => {
    setHeadingCommerc(e.target.value);
    //  console.log(headingCommerc)
  };

  const handleButtonClick = event => {
    event.preventDefault();
    setButtonClicked(true);
  };


  const testForm = () => {
    let msgError = '';
    if (typeDocument === 'dni') {
      if (typeof (numberDocument) !== 'number' && numberDocument.length !== 8) {
        msgError = <small>Escriba bien</small>
      }
      return msgError
    }
    else if (typeDocument === 'pasaporte' || typeDocument === 'ce') {
      if (typeof (numberDocument) !== 'number' && numberDocument.length !== 9) {
        msgError = <small>Otro Error</small>
      }
      return msgError;
    }
    return false;


  }

  return (
    <div>
      <div>
      <img src="https://i.imgur.com/J8hfANO.png" alt="imagen" />
        <form>
          <table className='font margintable'>
          <tr>
            <td>
            <label htmlFor="">Tipo de Documento:</label>
            </td>
            <td>
            <select className="input" onChange={typeDoc}>
            <option value="">Seleciona</option>
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="ce">C.E</option>
            </select>
            </td>
            </tr>
          <tr>
            <td>
            <label htmlFor="">Numero de Documento:</label>
            </td>
            <td>
            <input className="input" type="number" onChange={numberDoc} value={numberDocument} />
            </td>
          </tr>
          <tr>
            <td>
            <label htmlFor="">Rubro de Comercio:</label>
            </td>
         <td>
         <select className="input" onChange={headingDoc}>
            <option value="servicios">Servicios</option>
            <option value="comercio">Comercio</option>
            <option value="manufactura">Manufactura</option>
            <option value="agropecuaria">Agropecuario</option>
            <option value="otros">Otros</option>
          </select>
          <img src="https://img.icons8.com/metro/26/000000/question-shield.png" alt="imagen"/> 
         </td>
          </tr>
          </table>
            
        </form>
         
        <button className="Rectangle-9 font" onClick={event => { handleButtonClick(event); }}>
          {" "}
          CONTINUAR
          </button>
        {buttonClicked ? (
          testForm() ? (<small>Escriba bien</small>) : <Loan
            typeDoc={typeDocument}
            numberDoc={numberDocument}
            headingDoc={headingCommerc}
          />
        ) : null}
        {}

      </div>
    </div>
  );
};

export default GeneralInformation;
