import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="Rank">
      <h1> Welcome {name} !</h1>
      <h2>
        Your current score is: <span> {entries} </span>
      </h2>
    </div>
  );
};

export default Rank;
