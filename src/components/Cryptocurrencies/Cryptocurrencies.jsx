import React, { useState, useEffect } from "react";
import "./Cryptocurrencies.css";
import { getCryptoStats } from "../../Utils/apiRequest";
import CryptoCard from "../CryptoCard/CryptoCard";
const Cryptocurrencies = () => {
  const [crypto, setCryptoStats] = useState([]);
  useEffect(() => {
      getCryptoStats(setCryptoStats,50);
      
  }, []);
 
  return (
    <div className="cryptoDiv">
      {crypto.map((item,index)=><CryptoCard name={item.name} price={item.price} change={item.change} marketCap={item.marketcap}
        image={item.image}/ >)}
    </div>
  );
};

export default Cryptocurrencies;
