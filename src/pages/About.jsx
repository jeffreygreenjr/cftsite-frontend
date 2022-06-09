import React from 'react';
import { useState, useEffect } from "react";

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

    const loadAbout = () => (
        <div className="AboutInfo">
            <h2>{about.name}</h2>
            <h3>{`Founded in ${about.founded}`}</h3>
            <h4>{about.address}</h4>
            <h5>{about.phonenumber}</h5>
            <h5>{about.email}</h5>
            <p>{about.bio}</p>
        </div>
    )

  return (
    <div className="AboutPage">
        {about ? loadAbout() : <h1>Loading...</h1>}
    </div>
  )
}

export default About