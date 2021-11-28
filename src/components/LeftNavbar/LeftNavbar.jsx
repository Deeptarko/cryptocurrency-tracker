import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./LeftNavbar.css";
const LeftNavbar = () => {


  const link = useRef(null);
  const toggleButton=()=>{
    link.current.classList.toggle("hide");
  }
  return (
    <>
      <div className="navbar">
        <h1 className="navHeading">Cryptoverse</h1>
        <div className="checker">
          <div className="button">
            <button onClick={toggleButton}>Navbar</button>
          </div>
          <div className="links " ref={link}>
            <Link className="linkItems " to="/">
              Home
            </Link>
            <Link className="linkItems" to="/cryptocurrencies">
              Cryptocurrencies
            </Link>
            <Link className="linkItems" to="/exchanges">
              Exchanges
            </Link>
            <Link className="linkItems" to="/news">
              News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
