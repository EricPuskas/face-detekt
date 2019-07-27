import React, { memo } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = ({ isOpen, toggleNav }) => {
  let sideDrawerClass = classNames({
    SideNav: true,
    open: isOpen
  });

  return (
    <nav className={sideDrawerClass}>
      <div className="SideNav-scrollable">
        <ul>
          <li onClick={toggleNav}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/rankings">Rankings</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/login">Sign in</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(SideNav);
