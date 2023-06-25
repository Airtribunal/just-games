import React from "react";
import joystick from '../images/joystick.png'

const Navbar = (props) => {
  const { navLinksArray } = props;

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
              <h1 className="logo-lets">JG</h1>
              <img src={joystick} alt="gamepad" />
              <div className="logo-circle"></div>
          </div>
          <div className="nav-links">{navLinksArray}</div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
