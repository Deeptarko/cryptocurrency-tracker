import React, { useEffect, useState } from "react";
import NewsMiddleCard from "../../NewsMiddleCard/NewsMiddleCard";
import { getCryptoNews } from "../../Utils/apiRequest";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsPage.css";
const NewsPage = () => {
  const [cryptoNews, setcryptoNews] = useState([]);
  useEffect(() => {
    getCryptoNews(setcryptoNews, 4);
  }, []);
  return (
    <div className="newsPage">
      <h1 className="newsHeading">Crypto Latest News</h1>
      <div className="newsCards">
      {cryptoNews.map((item, index) => (
          <NewsCard
            title={item.title}
            author={item.author}
            summary={item.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
