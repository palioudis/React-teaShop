import React from "react";
import About from "../img/black1.png";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="section-center clearfix">
        <div className="about-img">
          <div className="about-picture-container">
            <img src={About} alt="tea kettle" className="about-picture" />
          </div>
        </div>

        <div className="about-info">
          <div>
            <h3 className="section-subtitle">About US</h3>
            <h2 className="section-title">tea station</h2>
          </div>

          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <a href="about.html" className="main-btn">
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
