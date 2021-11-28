import React from "react";
import "./ExchangesRow.css";
const ExchangesRow = (props) => {
  return (
    <tr className="exchangeRow">
      <td>{props.rank}</td>
      <td className="exchangeData">
        <img className="exchangeImg" src={props.image} alt="Icon" />
        <h1>{props.name}</h1>
      </td>
      <td>{props.market}</td>
      <td>{props.marketShare}</td>
    </tr>
  );
};

export default ExchangesRow;
