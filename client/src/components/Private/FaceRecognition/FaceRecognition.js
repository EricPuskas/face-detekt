import React from "react";
import Loader from "../../../assets/img/rolling.svg";
import "./FaceRecognition.css";

const FaceRecognition = ({ error, imageUrl, boxes, loading }) => {
  return (
    <div className="FaceRecognition center">
      <div className="FaceRecognition-img-container">
        {loading ? (
          <img
            src={Loader}
            alt="Loading..."
            className="FaceRecognition-loader"
          />
        ) : (
          <>
            <img
              id="inputimage"
              alt=""
              src={imageUrl}
              width="500px"
              heigh="auto"
            />
            {!error &&
              boxes.map(box => {
                return (
                  <div
                    key={box.topRow}
                    className="bounding-box"
                    style={{
                      top: box.topRow,
                      right: box.rightCol,
                      bottom: box.bottomRow,
                      left: box.leftCol
                    }}
                  />
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
