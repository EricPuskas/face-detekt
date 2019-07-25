import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Rank from "../Rank/Rank";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import useInputState from "../../../hooks/useInputState";
// Actions
import { logoutUser, getProfile } from "../../../actions/authActions";
import { detectFaces } from "../../../actions/imageActions";
import calculateBoxLocation from "../../../utils/calculateBoxLocation";

const Dashboard = ({ getProfile, detectFaces, image, auth, logoutUser }) => {
  const { data } = image;
  const [input, setInput, resetInput] = useInputState("");
  const [imgUrl, setImgUrl] = useState("");
  const [box, setBox] = useState("");
  const { user } = auth;
  const handleSubmit = e => {
    e.preventDefault();
    setImgUrl(input);
    let data = { input };
    resetInput();
    detectFaces(user.id, data);
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
    <div className="App">
      <Navigation logoutUser={logoutUser} />
      <Logo />
      <Rank name={user.name} entries={user.entries} />
      <ImageLinkForm
        setInput={setInput}
        input={input}
        handleSubmit={handleSubmit}
      />
      <FaceRecognition box={box} imageUrl={imgUrl} />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  image: state.image
});

export default connect(
  mapStateToProps,
  { logoutUser, detectFaces, getProfile }
)(Dashboard);
