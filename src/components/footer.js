import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-center">
        <div className="social-icons">
          <a href="#" className="social-icon">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="social-icon">
            {" "}
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#" className="social-icon">
            {" "}
            <FontAwesomeIcon icon={faStar} />
          </a>
        </div>
        <p className="footer-text">
          <span className="text-primary">Tea Station</span>
          <br />
          <span className="text-primary">all rights reversed</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
