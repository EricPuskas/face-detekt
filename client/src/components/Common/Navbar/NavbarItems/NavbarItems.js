import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarItems.css";

const NavbarItems = ({ isAuthenticated, logout }) => {
  let navItems = (
    <ul>
      <li>
        <NavLink exact={true} activeClassName="is-active" to="/">
          Rankings
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName="is-active" to="/login">
          Sign in
        </NavLink>
      </li>
    </ul>
  );
  if (isAuthenticated) {
    navItems = (
      <ul>
        <li>
          <NavLink exact={true} activeClassName="is-active" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/"
            onClick={logout}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    );
  }
  return <div className="NavbarItems">{navItems}</div>;
};

export default NavbarItems;
