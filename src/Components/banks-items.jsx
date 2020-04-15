import React from 'react';

const BanksItems = (props) => {



  console.log(props.month);

  const { name, tcea } = props.getsBanks;

  return (
    <tr>
      <td>{name}</td>
      <td>{props.month}</td>
      <td>{tcea}</td>
      <td>totalCount</td>
      <td>
        <button>Solicitar</button>
        <button >Mas Informacion</button>
      </td>
    </tr>
  );
}

export default BanksItems;
