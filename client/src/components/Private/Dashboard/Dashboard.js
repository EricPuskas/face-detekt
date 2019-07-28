import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// Hooks
import useInputState from "../../../hooks/useInputState";
// Utils
import calculateBoxLocations from "../../../utils/calculateBoxLocations";
// Actions
import { getProfile, getRanking } from "../../../actions/authActions";
import { detectFaces, clearErrors } from "../../../actions/imageActions";
// Components
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Ranking from "../Ranking/Ranking";
import Rank from "../Rank/Rank";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import HowItWorks from "./HowItWorks";
// CSS
import "./Dashboard.css";

const Dashboard = ({
  errors,
  clearErrors,
  getProfile,
  getRanking,
  detectFaces,
  image,
  auth
}) => {
  const [input, setInput, resetInput] = useInputState("");
  const [imgUrl, setImgUrl] = useState("");
  const [boxes, setBoxes] = useState([]);
  const { error } = errors;
  const { user } = auth;
  const { data, loading } = image;

  document.title = `GetFace - Welcome ${user.name}`;

  const handleSubmit = e => {
    e.preventDefault();
    setBoxes([]);
    clearErrors();
    setImgUrl(input);
    let data = { input };
    detectFaces(user.id, data);
    resetInput();
  };

  const displayFaceBoxes = boxes => {
    if (boxes) {
      setBoxes(boxes);
      clearErrors();
    }
  };

  useEffect(() => {
    if (user.id) getProfile(user.id);
  }, [user.id, getProfile]);

  useEffect(() => {
    if (data.outputs && user.id) {
      displayFaceBoxes(calculateBoxLocations(data, "inputimage"));
      getProfile(user.id);
      getRanking(10);
    }
    // eslint-disable-next-line
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
                  loading={loading}
                  error={error.image || error.invalid_input}
                />
              </div>
              <div className="col-12">
                <FaceRecognition
                  boxes={boxes}
                  imageUrl={imgUrl}
                  error={error.image || error.invalid_input}
                />
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
  image: state.image,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { detectFaces, getProfile, getRanking, clearErrors }
)(Dashboard);
