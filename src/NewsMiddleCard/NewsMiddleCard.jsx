import React from "react";
import "./NewsMiddleCard.css";
const NewsMiddleCard = (props) => {
  return (
    <div className="middleCard">
      <div className="topDiv">
        <h1 className="title">Title :{props[3].array.title}</h1>
        <p>{props.array[3].summary}</p>
        <h3>Author :{props.array.author}</h3>
      </div>
      <div className="bottomDiv">
        <h1 className="title">Title :{props[2].array.title}</h1>
        <p>{props[2].array.summary}</p>
        <h3>Author :{props[2].array.author}</h3>
      </div>
    </div>
  );
};

export default NewsMiddleCard;
