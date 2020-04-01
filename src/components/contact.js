import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="section-center clearfix">
          <div className="contact-info">
            <div className="contact-item">
              <h3 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                address
              </h3>
              <h3 className="contact-text">
                {" "}
                Vorstadt 141, 5607 <br />
                Hagglingen AG Switzerland
              </h3>
            </div>

            <div className="contact-item">
              <h3 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Email
              </h3>
              <h3 className="contact-text"> info@besttea.com</h3>
            </div>

            <div className="contact-item">
              <h3 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </span>
                Phone
              </h3>
              <h3 className="contact-text"> +49 176 2178 4589</h3>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="https://formspree.io/xqkeokgv"
              method="POST"
              className="form-group"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Emil"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="main-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
