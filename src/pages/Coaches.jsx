import "../styles/Coach.css"
import React from 'react';
import { useState, useEffect } from "react";

function Coaches(props) {

    // CREATE STATE TO HOLD COACHES DATA
    const [coaches, setCoaches] = useState([])

    const getCoachesData = async () => {
        const response = await fetch(props.URL + "coachingstaff")
        const data = await response.json()
        setCoaches(data);
        console.log(data)
    }

    useEffect(() => {
        getCoachesData()
    }, [props.URL]);

    const loadCoaches = coaches.map((coach, idx) => {
        return (
            <div className="CoachCard" key={idx}>
                <div className="CoachName">
                    <h2>{coach.name}</h2>  
                </div>
                <img className="coach-images" src={coach.image} alt={coach.name}></img>
                <div className="coach-body">
                    <h3>{`Classes: ${coach.teaches}`}</h3>
                    <h4>{`Belt: ${coach.belt}`}</h4>
                </div>
            </div>
        )
    })

  return (
    <div className="CoachesPage">
        <h1>COACHING STAFF</h1>
        <div className ="CoachContainer">
            {loadCoaches}
        </div>
    </div>
  )
}

export default Coaches