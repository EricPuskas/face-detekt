import React from "react";
import "./Ranking.css";

const Ranking = () => {
  return (
    <>
      <div className="Ranking">
        <h1> TOP 10</h1>
        <div className="Ranking-field">
          <h2>Name</h2>
          <h2>Score</h2>
        </div>
        <div className="row">
          <div className="col-8">
            <ul>
              <li className="first">1. Eric Puskas</li>
              <li className="second">2. Mary Johnson </li>
              <li className="third">3. John Dwayne</li>
              <li>4. George Bush</li>
              <li>5. Michael Jackson </li>
              <li>6. Nathan Smith</li>
              <li>7. Sally Sanders</li>
              <li>8. Sandra Borne</li>
              <li>9. Paula Netherblack</li>
              <li>10. Bruce Wayne</li>
            </ul>
          </div>
          <div className="col-4">
            <ul id="score">
              <li className="first">256</li>
              <li className="second">155 </li>
              <li className="third">134 </li>
              <li>115 </li>
              <li>100 </li>
              <li>76 </li>
              <li>73 </li>
              <li>53 </li>
              <li>42 </li>
              <li>33 </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ranking;
