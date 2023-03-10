import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './navbar.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdown from "./Dropdown";

export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    }
    const onMouseLeave =() => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }


  return (
    <header>
        {/* This will hold the logo link */}
        <Link to="/" className="logo"><i class='bx bx-happy'></i>
            TradeBros.
        </Link>

        {/* The menu icon element */}
        <div className="menu-icon" onClick={handleClick}></div>

        {/* List to hold all of the navbar elements */}
        <ul className="navbar">
            {/* Begin navbar item 1 */}
            <li>
                <Link to="/learn" className="navbar-links" onClick={closeMobileMenu}>
                    Learn
                </Link>
            </li>
            {/* Begin navbar item 2 */}
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to="/features" className="navbar-links" onClick={closeMobileMenu}>
                    Features
                    <ExpandMoreIcon className="dropdown-button"/>
                </Link>
                {/* Make dropdown menu here */}
                {dropdown && <Dropdown/>}
            </li>
            {/* Begin navbar item 3 */}
            <li>
                <Link to="/market" className="navbar-links" onClick={closeMobileMenu}>
                    Market
                </Link>
            </li>
            {/* Begin navbar item 4 */}
            <li>
                <Link to="/pricing" className="navbar-links" onClick={closeMobileMenu}>
                    Pricing
                </Link>
            </li>
            {/* Begin navbar item 5 */}
            <li>
                <Link to="/support" className="navbar-links" onClick={closeMobileMenu}>
                    Support
                </Link>
            </li>
        </ul>

        {/* Div container to hold the sign in and login buttons */}
        <div className="header-btn">
            <Link to="/sign-up" className="sign-up">
                Sign Up
            </Link>
            <Link to="/login" className="login">
                Login
            </Link>
            <Link to="/sign-out" className="sign-out">
                Sign Out
            </Link>
        </div>
    </header>
  );
}

