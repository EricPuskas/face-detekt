import React, { useEffect, useState } from "react";
import debounce from "../../../utils/debounce";
import { Link } from "react-router-dom";

const Description = () => {
  // eslint-disable-next-line
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let debouncedHandleResize;
    debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 300);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  if (window.innerWidth > 1366) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="project-description container">
            <p>
              This application makes use of
              <a
                href="https://www.clarifai.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" Clarifai's "}
              </a>
              face detection API in order to detect faces in images.{" "}
              <Link to="/register">Sign up for free</Link>, submit your image
              and you'll get a score based on how many faces your image has.
            </p>
          </div>
        </div>
        <div className="Landing-btn-container">
          <Link to="/register" className="Landing-btn">
            Sign up for free
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="Landing-btn-container">
          <Link to="/register" className="Landing-btn">
            Sign up for free
          </Link>
        </div>
        <div className="col-12">
          <div className="project-description container">
            <p>
              This application makes use of
              <a
                href="https://www.clarifai.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" Clarifai's "}
              </a>
              face detection API in order to detect faces in images.{" "}
              <Link to="/register">Sign up for free</Link>, submit your image
              and you'll get a score based on how many faces your image has.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Description;
