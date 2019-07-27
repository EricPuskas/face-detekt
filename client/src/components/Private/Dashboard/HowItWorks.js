import React from "react";

const HowItWorks = () => {
  return (
    <div className="Ranking-how">
      <h1>How It Works</h1>
      <p>
        Every time you submit an image to be scanned, the API will detect the
        number of faces in the image. Each face that it detects will add 1 point
        to your score.
      </p>
    </div>
  );
};

export default HowItWorks;
