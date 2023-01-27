import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <header>
        <Link to="/" className="logo"><i class='bx bx-happy'></i>
            TradeBros.
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            {/* <i className="fas fa-bars" /> */}
        </div>

        <ul className="navbar">
            <li>
                <Link to="/learn" className="navbar-links" onClick={closeMobileMenu}>
                    Learn
                </Link>
            </li>
            <li>
                <Link to="/features" className="navbar-links" onClick={closeMobileMenu}>
                    Features
                </Link>
                {/* Make dropdown menu here */}
            </li>
            <li>
                <Link to="/market" className="navbar-links" onClick={closeMobileMenu}>
                    Market
                </Link>
            </li>
            <li>
                <Link to="/news" className="navbar-links" onClick={closeMobileMenu}>
                    News
                </Link>
            </li>
            <li>
                <Link to="/pricing" className="navbar-links" onClick={closeMobileMenu}>
                    Pricing
                </Link>
            </li>
            <li>
                <Link to="/support" className="navbar-links" onClick={closeMobileMenu}>
                    Support
                </Link>
            </li>
        </ul>


        <div className="header-btn">
            <Link to="/sign-up" className="sign-up">
                Sign Up
            </Link>
            <Link to="/login" className="login">
                Login
            </Link>
        </div>
    </header>
  );
}

