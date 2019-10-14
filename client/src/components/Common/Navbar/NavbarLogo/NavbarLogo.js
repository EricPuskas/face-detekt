import React from "react";
import { Link } from "react-router-dom";
import "./NavbarLogo.css";

const NavbarLogo = () => {
  return (
    <div className="NavbarLogo">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/zenipsstudio/image/upload/v1571033925/logo_3.png"
          className="NavbarLogo-img"
          alt="Logo"
        />{" "}
      </Link>
    </div>
  );
};

export default NavbarLogo;
