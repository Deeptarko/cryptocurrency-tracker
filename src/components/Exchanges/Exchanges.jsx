import React, { useState, useEffect } from "react";
import "./Exchanges.css";
import { getCryptoExchanges } from "../../Utils/apiRequest";
import ExchangesRow from "../ExchangesRow/ExchangesRow";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    getCryptoExchanges(setExchanges, 0);
  }, []);
  return (
    <div className="exchanges">
      <table className="exchangeTable">
        <tr>
          <th>Rank</th>
          <th>Exchanges</th>
          <th>No of Markets</th>
          <th>Market Share</th>
        </tr>
        {exchanges.map((item, index) => (
          <ExchangesRow
            rank={item.rank}
            name={item.name}
            market={item.market}
            image={item.image}
            marketShare={item.marketShare}
          />
        ))}
      </table>
    </div>
  );
};

export default Exchanges;
