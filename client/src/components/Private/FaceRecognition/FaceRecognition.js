import React from "react";
import "./FaceRecognition.css";
import uuid from "uuid/v4";

const FaceRecognition = ({ error, imageUrl, boxes }) => {
  return (
    <div className="FaceRecognition center">
      <div className="FaceRecognition-img-container">
        {error ? (
          <img
            alt="Error"
            src="https://www.hostinger.in/assets/images/404-3a53e76ef1.png"
            width="500px"
            height="auto"
          />
        ) : (
          <img
            id="inputimage"
            alt=""
            src={imageUrl}
            width="500px"
            heigh="auto"
          />
        )}
        {error
          ? null
          : boxes.map(box => {
              return (
                <div
                  key={uuid()}
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
      </div>
    </div>
  );
};

export default FaceRecognition;
