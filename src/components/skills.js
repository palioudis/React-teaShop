import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <div className="skills clearfix">
      <div className="skill">
        <span className="skill-icon">
          <FontAwesomeIcon icon={faMugHot} />
        </span>
        <h3 className="skill-title">Made in Japan</h3>
        <p className="skill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="skill">
        <span className="skill-icon">
          <FontAwesomeIcon icon={faLeaf} />
        </span>
        <h3 className="skill-title">Relaxation</h3>
        <p className="skill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="skill">
        <span className="skill-icon">
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <h3 className="skill-title">Made with Heart</h3>
        <p className="skill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="skill">
        <span className="skill-icon">
          <FontAwesomeIcon icon={faTruck} />
        </span>
        <h3 className="skill-title">Free Shipping</h3>
        <p className="skill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
};

export default Skills;
