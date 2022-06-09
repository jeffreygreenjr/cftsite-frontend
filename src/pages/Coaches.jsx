import React from 'react';
import { useState, useEffect } from "react";

function Coaches(props) {

      // CREATE STATE TO HOLD CLASS DATA
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
              <div className="CoachList" key={idx}>
                  <h2>{coach.name}</h2>
                  <h3>{`Classes: ${coach.teaches}`}</h3>
                  <h4>{`Belt: ${coach.belt}`}</h4>
                  <img className="coach-images" src={coach.image} alt={coach.name}></img>
              </div>
          )
      })

  return (
    <div>
        <h1>Coaching Staff</h1>
        {loadCoaches}
    </div>
  )
}

export default Coaches