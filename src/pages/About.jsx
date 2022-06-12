import "../styles/About.css"
import React from 'react';
import { useState, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";

function About(props) {

    // CREATE STATE TO HOLD ABOUT DATA
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch(props.URL + "about")
        const data = await response.json()
        setAbout(data);
        console.log(data.name)
    }

    useEffect(() => {
        getAboutData()
    }, [props.URL])

    // const loadAbout = () => (
    //     <div className="AboutInfo">
    //         <img className="AboutPhoto" src="https://i.imgur.com/dr5bFlc.jpeg" alt="CFT-Team-Photo"></img>
    //         <h2>{about.name}</h2>
    //         <h3>{`Founded in ${about.founded}`}</h3>
    //         <h4>{about.address}</h4>
    //         <h5>{about.phonenumber}</h5>
    //         <h5>{about.email}</h5>
    //         <div ClassName="AboutBioSection">
    //             <p>{about.bio}</p>
    //         </div>  
    //     </div>
    // )

  return (
    <div className="AboutPage">
        <div className="AboutInfo">
            <img className="AboutPhoto" src="https://i.imgur.com/dr5bFlc.jpeg" alt="CFT-Team-Photo"></img>
            <div className="AboutText">
                <h3>Founded in 1998.</h3>
                <p>Chicago's Premier MMA Training Center just minutes away from Midway International Airport. Home of World Champions with programs in MMA, Striking, Wrestling, BJJ, and Strength and Conditioning.</p>
                <h4>Contact us:</h4>
                <h5>chicagofightteam@gmail.com | (773) 885-5700</h5>
                <h4 className="ig-link">
                    <a className="ig-link" href="https://www.instagram.com/chicagofightteam/">INSTAGRAM < BsInstagram /></a>
                </h4>
            </div>
        </div>
    </div>
  )
}

export default About