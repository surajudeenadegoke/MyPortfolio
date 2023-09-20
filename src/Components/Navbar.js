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
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={50} height={50} />
        <p className="logo--text">surajcodes</p>
      </div>
      <div className="toggleButton" onclick={handleClick}>
        {toggleButton ? (
          <ReorderIcon
            style={{
              fontSize: "40px",
              color: "white",
              backgroundColor: "#21325e",
            }}
          />
        ) : (
          <CloseIcon
            style={{
              fontSize: "40px",
              color: "white",
              backgroundColor: "#21325e",
            }}
          />
        )}
      </div>

      <div className="nav--links">
        <Link to="/" className="link--item">
          Home
        </Link>
        <Link to="/experience" className="link--item">
          Experience
        </Link>
        <Link to="projects" className="link--item">
          Projects
        </Link>
        <a
          href="https://docs.google.com/document/d/1M5ST89QjVWAys9-Bs5jc1N90vVb90vQI/edit"
          className="link--item"
        >
          my_CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
