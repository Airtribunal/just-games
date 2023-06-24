import React from "react";
import logo from '../images/logo.png'

const Navbar = (props) => {
    const {navLinksArray} = props
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">{navLinksArray}</div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
