import React, { useState, useEffect } from "react";
import "./StatsContainer.css";
const StatsContainer = (props) => {
  const [name, setName] = useState("");
  useEffect(() => {
    let name = props.name;
    let str = "";
    let flag = true;
    for (let i = 0; i < name.length; i++) {
      if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
        str += name[i];
      } else if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
        str += " ";
        str += name[i];
      } else {
        if (flag) {
          str += " ";
          str += name[i];
          flag = false;
        }
        else{
            str += name[i];
        }
      }
    }
    const str2 = str.charAt(0).toUpperCase() + str.slice(1)+" :";
    setName(str2);
  }, []);
  return (
    <div className="statsContainer">
      <h2 className="statsName">{name}</h2>
      <h2 className="statsVal">{props.val}</h2>
    </div>
  );
};

export default StatsContainer;
