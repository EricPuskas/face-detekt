import React from "react";
import Description from "./Description";

const Main = () => {
  return (
    <div className="Landing-main-container">
      <div className="row align-center">
        <div className="col-xl-4 col-12">
          <h1>Face Detection App</h1>
          <div className="Landing-img-container">
            <img
              alt={"Face Detection - GetFace App"}
              src={
                "https://res.cloudinary.com/zenipsstudio/image/upload/v1564148505/banner_opt_2.png"
              }
              className={"Landing-main-avatar"}
            />
          </div>
        </div>
        <div className="col-xl-8 col-12">
          <div className="Landing-description">
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
