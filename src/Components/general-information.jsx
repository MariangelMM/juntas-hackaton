import React, { useState } from "react";
import Loan from "./loan";

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
  return (
    <div>
      <div>
        <form>
          <label htmlFor="">Tipo de Documento:</label>
          <select onChange={typeDoc}>
            <option value="">Seleciona</option>
            <option value="dni">DNI</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="ce">C.E</option>
          </select>

          <label htmlFor="">Numero de Documento:</label>
          <input type="number" onChange={numberDoc} value={numberDocument} />

          <label htmlFor="">Rubro de Comercio:</label>
          <select onChange={headingDoc}>
            <option value="servicios">Servicios</option>
            <option value="comercio">Comercio</option>
            <option value="manufactura">Manufactura</option>
            <option value="agropecuaria">Agropecuario</option>
            <option value="otros">Otros</option>
          </select>
        </form>
        <button onClick={event => handleButtonClick(event)}>
          {" "}
          Continuar
          </button>
        {buttonClicked ? (
          <Loan
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



// export default function App() {
//   const { register, errors, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//   <form onSubmit={handleSubmit(onSubmit)}>
//   <input name="singleErrorInput" ref={register({ required: true })} />
//   {errors.singleErrorInput && "Your input is required"}

//   {/* refer to the type of error to display message accordingly */}
//   <input
//   name="multipleErrorInput"
//   ref={register({ required: true, maxLength: 50 })}
//   />
//   {errors.multipleErrorInput &&
//   errors.multipleErrorInput.type === "required" &&
//   "Your input is required"}
//   {errors.multipleErrorInput &&
//   errors.multipleErrorInput.type === "maxLength" &&
//   "Your input exceed maxLength"}

//   {/* register with validation */}
// <input type="number" name="numberInput" ref={register({ min: 50 })} />
// {errors.numberInput && "Your input required to be more than 50"}