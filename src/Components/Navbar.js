import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Images/myPic.gif";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(true);
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
  const handleScroll = (event) => {
    setToggleButton(!toggleButton);
  };
  window.addEventListener("scroll", handleScroll);
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
        <Link to="/" className="link--item">
          Home
        </Link>
        <Link to="/experience" className="link--item">
          Education
        </Link>
        <Link to="/education" className="link--item">
          Experience
        </Link>
        <Link to="" className="link--item">
          Projects
        </Link>
        <a
          href="https://docs.google.com/document/d/1M5ST89QjVWAys9-Bs5jc1N90vVb90vQI/edit?usp=sharing&ouid=103733681009080376578&rtpof=true&sd=true"
          className="link--item"
        >
          my_CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
