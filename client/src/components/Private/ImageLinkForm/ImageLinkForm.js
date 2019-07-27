import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ setInput, input, handleSubmit }) => {
  return (
    <div className="ImageLinkForm">
      <p>Submit some pictures and I'll bring your score up! Give it a try!</p>
      <div className="ImageLinkForm-form center">
        <input value={input} type="text" onChange={setInput} />
        <button onClick={handleSubmit}> Scan </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
