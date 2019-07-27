import React from "react";
import "./Landing.css";
import Main from "./Main";
import Ranking from "../../Private/Ranking/Ranking";

const Landing = () => {
  document.title = "GetFace - Home";
  return (
    <div className="Landing center">
      <div className="row center">
        <div className="col-xl-7 col-12">
          <Main />
        </div>
        <div className="col-xl-4 col-12">
          <Ranking />
        </div>
      </div>
    </div>
  );
};

export default Landing;
