import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// Hooks
import useInputState from "../../../hooks/useInputState";
// Utils
import calculateBoxLocation from "../../../utils/calculateBoxLocation";
// Actions
import { getProfile } from "../../../actions/authActions";
import { detectFaces } from "../../../actions/imageActions";
// Components
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Ranking from "../Ranking/Ranking";
import Rank from "../Rank/Rank";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import HowItWorks from "./HowItWorks";
// CSS
import "./Dashboard.css";

const Dashboard = ({ getProfile, detectFaces, image, auth }) => {
  const [input, setInput, resetInput] = useInputState("");
  const [imgUrl, setImgUrl] = useState("");
  const [box, setBox] = useState("");

  const { user } = auth;
  const { data } = image;

  document.title = `GetFace - Welcome ${user.name}`;

  const handleSubmit = e => {
    e.preventDefault();
    setImgUrl(input);
    let data = { input };
    detectFaces(user.id, data);
    resetInput();
  };

  const displayFaceBox = box => {
    setBox(box);
  };

  useEffect(() => {
    if (user.id) getProfile(user.id);
  }, [user.id, getProfile]);

  useEffect(() => {
    if (data.outputs && user.id) {
      displayFaceBox(calculateBoxLocation(data, "inputimage"));
      getProfile(user.id);
    }
  }, [data, getProfile, user.id]);

  return (
    <div className="Dashboard center">
      <div className="row">
        <div className="col-xl-4 col-12">
          <Ranking />
          <HowItWorks />
        </div>
        <div className="col-xl-8 col-12">
          <div className="row">
            <div className="Dashboard-main">
              <div className="col-12">
                <Rank name={user.name} entries={user.entries} />
                <ImageLinkForm
                  setInput={setInput}
                  input={input}
                  handleSubmit={handleSubmit}
                />
              </div>
              <div className="col-12">
                <FaceRecognition box={box} imageUrl={imgUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  image: state.image
});

export default connect(
  mapStateToProps,
  { detectFaces, getProfile }
)(Dashboard);
