// import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Images/myPic.gif";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" width={50} height={50} />
        <p className="logo--text">surajcodes</p>
      </div>
      <button className="toggleButton" onclick={handleClick}>
        <ReorderIcon
          style={{
            fontSize: "40px",
            color: "white",
            backgroundColor: "#21325e",
          }}
        />
      </button>

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
