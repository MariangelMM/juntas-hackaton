import React from "react";
import { Page, Text, Image, View, Document, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
  fontSize:15,
  padding:30
  },
  description: {
    fontSize:12
    },
  heading: {
    fontSize:18
  },
  logo: {
    width:70,
    height:70
  }
});

const DocumentLoadPdf = (props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
      <View>
          <Image style= {styles.logo} src="https://i.imgur.com/KHwrKtk.png"/>
          <Text style= {styles.heading} >JUNTAS</Text>
        </View>
        <View >
          <Text style= {styles.heading} >DETALLE DEL PRÉSTAMO</Text>
        </View>
        <View >
          <Text>---------------------------------------------------------</Text>
          <Text>Entidad Bancaria:</Text>
          <Text style= {styles.description} >{props.data.name}</Text>
        </View>
        <View>
        <Text>---------------------------------------------------------</Text>
          <Text>Moneda del Crédito:</Text>
          <Text style= {styles.description} >Soles</Text>
        </View>
        <View>
        <Text>---------------------------------------------------------</Text>
          <Text>Monto a Financiar:</Text>
          <Text style= {styles.description} >{props.data.amountrequest}</Text>
        </View>
        <View>
        <Text>---------------------------------------------------------</Text>
          <Text>Tasa de Costo EFectiva Anual:</Text>
          <Text style= {styles.description} >{props.data.tcea}</Text>
        </View>
        <View>
        <Text>---------------------------------------------------------</Text>
          <Text>Cuota Mensual:</Text>
          <Text style= {styles.description} >{props.data.qouta}</Text>
        </View>
        <View>
        <Text>---------------------------------------------------------</Text>
          <Text>Plazo del crédito:</Text>
          <Text style= {styles.description} >{props.data.month}</Text>
        </View>
        <View >
        <Text>---------------------------------------------------------</Text>
          <Text>Monto Total:</Text>
          <Text style= {styles.description} >{props.data.total}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default DocumentLoadPdf;
