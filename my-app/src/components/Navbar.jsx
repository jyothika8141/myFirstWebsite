import React from "react";
import logo from "../static/images/logo1.png";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="rightside">
            <ul>
                <li><Link id="t" to="/"> Home </Link></li>
                <li><Link id="t" to="/search"> Explore </Link></li>
                <li><Link id="t" to="/register"> Register </Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;