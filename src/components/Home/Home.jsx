import axios from "axios";
import React, { useState, useEffect } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import StatsContainer from "../StatsContainer/StatsContainer";
import './Home.css';
import { getGlobalStats,getCryptoStats } from "../../Utils/apiRequest";
const Home = () => {
  const [stats, setStats] = useState([]);
  const [cryptoStats,setCryptoStats]=useState([]);
  useEffect(() => {
    getGlobalStats(setStats);
    getCryptoStats(setCryptoStats,11);
  }, []);

  return (
    <>
      <div className="globalStats">
        <h1>Crypto Global Stats</h1>
        {stats.map((item,index)=><StatsContainer name={item.name} val={item.val}/>)}
      </div>
      <div className="cryptoStats">
        <h1>Top 10 Cryptos in the World</h1>
        {cryptoStats.map((item,index)=><CryptoCard name={item.name} price={item.price} change={item.change} marketCap={item.marketcap}
        image={item.image}/ >)}
      </div>
    </>
  );
};

export default Home;
