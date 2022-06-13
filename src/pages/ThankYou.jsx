import React from 'react'
import "../styles/ThankYou.css"
import { BsInstagram } from "react-icons/bs";

function ThankYou(props) {
  return (
    <div className="ThankYouPage">
        <div className="ty-heading">
            <h1 className="ty-header">Thank you for your inquiry.</h1>
        </div>
        <div className="ty-body">
            <h2>Follow us on <a className="ig-hyperlink" href="https://www.instagram.com/chicagofightteam/">instagram</a> to stay up to date</h2>
        </div>

    </div>
  )
}

export default ThankYou