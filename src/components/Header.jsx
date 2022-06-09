import "../styles/Header.css"
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header>
        <div className="HeaderLogoContainer">
            <img className="CFT-headerlogo" src="https://i.imgur.com/EQDB1gh.png" alt="CFTtextlogo"></img>
        </div>
        <nav className="navBar">
            <Link className="NavLinks" to="/">
            <div>HOME</div>
            </Link>
            <Link className="NavLinks" to="/about">
            <div>ABOUT</div>
            </Link>
            <Link className="NavLinks" to="/classes">
            <div>CLASSES</div>
            </Link>
            <Link className="NavLinks" to="/coachingstaff">
            <div>COACHES</div>
            </Link>
            <Link className="NavLinks" to="/fighters">
            <div>FIGHTERS</div>
            </Link>
            <Link className="NavLinks" to="/shop">
            <div>SHOP</div>
            </Link>
        </nav>
    </header>
  )
}

export default Header