import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  const showMenu = () => {
    if (window.innerWidth <= 420) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  window.addEventListener("resize", showMenu);

  let menuButton;
  if (toggle) {
    menuButton = (
      <button onClick={handleToggle} className="menuButton">
        <FaTimes />
      </button>
    );
  } else {
    menuButton = (
      <button onClick={handleToggle} className="menuButton">
        <FaBars />
      </button>
    );
  }

  return (
    <header>
      <nav className="desktop-nav">
        <div className="logo-menu">
          <a href="#" className="logo">
            rirru
          </a>
          {menuButton}
        </div>

        <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
          About
        </a>
        <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
          Works
        </a>
        <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
          Contact
        </a>
      </nav>

      <nav className="mobile-nav">
        <div className="logo-menu">
          <a href="#" className="logo">
            rirru
          </a>
          {menuButton}
        </div>

        <div className="mn-links">
          <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
            About
          </a>
          <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
            Works
          </a>
          <a href="#" className={toggle ? "nav-show" : "nav-hide"}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
