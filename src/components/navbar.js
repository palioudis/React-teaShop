import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  state = {
    showNav: false
  };

  handdleToggle = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };
  render() {
    return (
      <div>
        <span
          className={this.state.showNav ? "navbar" : "nav-btn"}
          onClick={this.handdleToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>

        <nav className="navbar" id="navbar">
          <div className="navbar-header">
            <span className="nav-close" id="nav-close">
              {" "}
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <ul className={this.state.showNav ? "navbar" : "navbar"}>
            <li>
              <a href="#" className="nav-link">
                {" "}
                Home
              </a>
            </li>

            <li>
              <a href="#" className="nav-link">
                {" "}
                About
              </a>
            </li>

            <li>
              <a href="#" className="nav-link">
                {" "}
                Products
              </a>
            </li>

            <li>
              <a href="#" className="nav-link">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
