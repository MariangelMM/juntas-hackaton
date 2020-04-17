import React from "react";
import DocumentLoadPdf from './download-pdf';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Header from "./header";

const LoanDetail = (props) => {
  const {
    month,
    name,
    quota,
    tcea,
    total,
    amountrequest,
  } = props.location.propsState;

  return (
    <div className="mainlitain">
      <Header />
      <div className="detail font m-3 text-center">
        <h2>¡Haz completado exitosamente tu solicitud de préstamo!</h2>
        <i className="fas fa-check"></i>
        <h4>
          Detro de las siguientes 24 horas se contactará un ejecutivo para
          informarte sobre el resultado de tu solicitud de préstamo.
        </h4>
      </div>
      <h4>
        A continuación te brindamos la información de tu detalle de préstamo.
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
            <td>{name}</td>
          </tr>
          <tr>
            <td>Moneda de Credito</td>
            <td>Soles</td>
          </tr>
          <tr>
            <td>Monto a Financiar</td>
            <td>{amountrequest}</td>
          </tr>
          <tr>
            <td>Tasa de Costo Efectivo Anual(TCEA)</td>
            <td>{tcea}</td>
          </tr>
          <tr>
            <td>Cuota Mensual</td>
            <td>{quota}</td>
          </tr>
          <tr>
            <td>Plazo del Credito </td>
            <td>{month}</td>
          </tr>
          <tr>
            <td>Monto Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <div className="container">
        <PDFDownloadLink
          document={<DocumentLoadPdf data={props.location.propsState} />}
          fileName="juntas-detalleprestamo.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            backgroundColor: "#f7cd09",
            borderRadius: "5px"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Cargando documento..." : "Descargar PDF"
          }
        </PDFDownloadLink>
      </div>
      <button className="btn-pink">Finalizar</button>
    </div>
  );
};

export default LoanDetail;
