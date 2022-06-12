import React from 'react'
import "../styles/ThankYou.css"
import { BsInstagram } from "react-icons/bs";

function ThankYou() {
  return (
    <div className="ThankYouPage">
        <div className="ty-heading">
            <h1 className="ty-header">Thank you for your submission.</h1>
        </div>
        <div className="ty-body">
            <h2>Follow us on Instagram to stay up to date</h2>
            <a className="ig-link" href="https://www.instagram.com/chicagofightteam/">< BsInstagram /></a>
        </div>

    </div>
  )
}

export default ThankYou