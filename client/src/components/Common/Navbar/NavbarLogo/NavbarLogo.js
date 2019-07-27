import React from "react";
import { Link } from "react-router-dom";
import "./NavbarLogo.css";

const NavbarLogo = () => {
  return (
    <div className="NavbarLogo">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zenipsstudio/image/upload/v1564154569/logo_1.png"
          className="NavbarLogo-img"
          alt="Logo"
        />{" "}
      </Link>
    </div>
  );
};

export default NavbarLogo;
