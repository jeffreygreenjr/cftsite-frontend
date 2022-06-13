import "../styles/ShopForm.css"
import React from 'react'

function ShopForm(props) {



  return (
    <div className="ShopFormDiv">
        <h3 className="FormTitle">Inquiry Form</h3>
        <form className="ShopForm" action="https://formsubmit.co/mrjeffreygreen@gmail.com" method="POST">
            <input className="s subject" type="hidden" name="_subject" value="New CFT Inquiry"/>
            <input className="s next" type="hidden" name="_next" value="https://chicagofightteam.netlify.app/thankyou"/>
            <input className="s name" type="text" name="name" placeholder="Full Name" required/>
            <input className="s email" type="email" name="email" placeholder="Your Email" required/>
            <input className="s phone" type="phone" name="phone" placeholder="Your Phone Number" required/>
            <input className="s message" type="text" name="message" placeholder="ex. 'Hi, I'm interested in a size M in the CFT T-Shirt'" required/>
            <input type="hidden" name="_captcha" value="false"/>
            <button className="submitbutton" type="submit">SEND</button>
        </form>
    </div>
  )
}

export default ShopForm