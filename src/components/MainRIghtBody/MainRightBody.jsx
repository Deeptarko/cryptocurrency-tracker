import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MainRightBody.css";
import Home from "../Home/Home";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import axios from 'axios';
import Exchanges from "../Exchanges/Exchanges";
import NewsPage from "../NewsPage/NewsPage";

const MainRightBody = () => {

  

  return (
    <div className="rightPart">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cryptocurrencies">
          <Cryptocurrencies />
        </Route>
        <Route exact path="/exchanges">
          <Exchanges/>
        </Route>
        <Route exact path="/news">
          <NewsPage/>
        </Route>
      </Switch>
    </div>
  );
};

export default MainRightBody;
