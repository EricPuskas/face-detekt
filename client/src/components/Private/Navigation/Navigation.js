import React from "react";

const Navigation = ({ onRouteChange, isSignedIn, logoutUser }) => {
  return (
    <p onClick={logoutUser} className="f3 link dim black underline pa3 pointer">
      Sign Out
    </p>
  );
};

export default Navigation;
