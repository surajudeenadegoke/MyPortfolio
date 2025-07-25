import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Images/myPic.gif";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const handleClick = () => {
    setToggleButton(!toggleButton);
  };
  const style = {
    fontSize: "40px",
    color: "white",
    backgroundColor: "#21325e",
  };
  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <nav id="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={50} height={50} />
        <p className="logo--text">surajcodes</p>
      </div>
      <div className="toggleButton" onClick={handleClick}>
        {toggleButton ? (
          <CloseIcon style={style} />
        ) : (
          <ReorderIcon style={style} />
        )}
      </div>

      <div
        id="nav--links"
        onClick={handleToggle}
        className={toggleButton ? "#nav--links active" : "#nav--links"}
      >
        <Link to="/" className="link--item" onClick={handleToggle}>
          Home
        </Link>
        <Link to="/experience" className="link--item" onClick={handleToggle}>
          Education
        </Link>
        <Link to="/education" className="link--item" onClick={handleToggle}>
          Experience
        </Link>
        <Link to="/project" className="link--item" onClick={handleToggle}>
          Projects
        </Link>
        <a
          href="https://docs.google.com/document/d/1NK2828c2c9jU8lauIVZdkN0X7DB8L3Od/edit"
          className="link--item"
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
