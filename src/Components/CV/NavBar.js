import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./../../data/MenuItems";
import "../CSS/NavBar.css";

export default class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav>
        <div className="navbar-icon">
          <img
            src="images/menu.png"
            onClick={this.handleClick}
            alt="icone menu"
          />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  onClick={this.handleClick}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
