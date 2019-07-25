import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1> Landing Page</h1>
      <Link to="/auth/login"> Login </Link>
      <Link to="/auth/register"> Register </Link>
    </div>
  );
};

export default Landing;
