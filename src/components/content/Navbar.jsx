import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { TbWorldWww } from "react-icons/tb";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const logout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <main
      className={
        colorChange ? "navbar-container colorChange" : "navbar-container"
      }
    >
      <ul className="navbar">
        <li>
          <NavLink className="nav-logo">
            <TbWorldWww />
          </NavLink>
        </li>
        <li>
          <NavLink>
            <label htmlFor="search" className="nav-search__label">
              Search:
            </label>
            <input
              type="search"
              name="search"
              id="search"
              className="nav-search__input"
            />
          </NavLink>
        </li>
        <li className="nav-avatar">
          <NavLink className="">
            <RxAvatar />
          </NavLink>
        </li>
        <li>
          <NavLink onClick={logout}>Logout</NavLink>
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
