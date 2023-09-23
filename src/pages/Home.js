import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div className="about--h2">Hi, My Name is Suraj </div>
        <div className="prompt">
          <h4 className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "A Proficient Frontend Developer with 3+ years of experience",
                  "A design thinker",
                  "  A Software Developer with passion for learning and innovation",
                ],
                changeDelay: 3,
                changeDeleteSpeed: 2,
                autoStart: true,
                loop: false,
              }}
            />
          </h4>
        </div>
      </div>
      <div className="skills">
        <h1>My Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>React, Angular, CSS, HTMLRedux, TailwindCSS, NextJS</span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>NodeJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, SQL</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
