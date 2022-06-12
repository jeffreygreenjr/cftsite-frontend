import React from 'react'

function ShopForm() {



  return (
    <div>
        <h3 className="FormTitle">Inquiry Form</h3>
        <form action="https://formsubmit.co/mrjeffreygreen@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New CFT Inquiry"/>
            <input type="hidden" name="_next" value="https://localhost:3000/thankyou"/>
            <input type="text" name="name" placeholder="Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <input type="phone" name="phone" placeholder="Your Phone Number" required/>
            <input type="email" name="message" placeholder="ex. 'Hi, I'm interested in a size M in the CFT T-Shirt'" required/>
            <button type="submit">SEND</button>
        </form>
    </div>
  )
}

export default ShopForm