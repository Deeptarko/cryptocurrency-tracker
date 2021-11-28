import React from "react";
import "./CryptoCard.css";
const CryptoCard = (props) => {
  return (
    <div className="cryptoCard">
      <div className="cryptoHeading">
        <h1>{props.name}</h1>
        <img src={props.image} alt="Icon" />
      </div>

      <p> Market Cap:{props.marketCap}</p>
      <p>Price:{props.price}</p>
      <p>Daily Change:{props.change}</p>
    </div>
  );
};

export default CryptoCard;
