import React from "react";
import Loader from "../../../assets/img/rolling.svg";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ setInput, input, handleSubmit, error, loading }) => {
  return (
    <div className="ImageLinkForm">
      <p>Submit some pictures and I'll bring your score up! Give it a try!</p>
      <div className="ImageLinkForm-form center">
        <input value={input} type="text" onChange={setInput} />
        <button onClick={handleSubmit}>
          {loading ? (
            <img
              src={Loader}
              className="ImageLinkForm-loader"
              alt="Loading..."
            />
          ) : (
            "Scan"
          )}
        </button>
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default ImageLinkForm;
