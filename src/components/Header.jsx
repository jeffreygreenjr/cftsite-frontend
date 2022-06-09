import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

    // INLINK STYLE FOR THE NAV TAG
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

  return (
    <header>
        <h1>Chicago Fight Team</h1>
        <nav style={navStyle}>
            <Link to="/">
            <div>HOME</div>
            </Link>
            <Link to="/about">
            <div>ABOUT</div>
            </Link>
            <Link to="/classes">
            <div>CLASSES</div>
            </Link>
            <Link to="/coachingstaff">
            <div>COACHES</div>
            </Link>
            <Link to="/fighters">
            <div>FIGHTERS</div>
            </Link>
            <Link to="/shop">
            <div>SHOP</div>
            </Link>
        </nav>
    </header>
  )
}

export default Header