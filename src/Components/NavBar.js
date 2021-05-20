import React, { Component } from 'react'

import { MenuItems } from "../data/MenuItems"
import "./CSS/NavBar.css"

export default class NavBar extends Component {
    state = { clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div>
                <div className="navbar-icon">
                    <img src="images/menu.png"  onClick={this.handleClick} />
                </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
