import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/Fighter.css";


function Fighters(props) {

    // CREATE STATE TO HOLD FIGHTER DATA
    const [fighters, setFighters] = useState([])

    const getFighterData = async () => {
        const response = await fetch(props.URL + "fighters")
        const data = await response.json()
        setFighters(data);
        console.log(data)
    }

    useEffect(() => {
        getFighterData()
    }, [props.URL]);

    const loadFighters = fighters.map((fighter, idx) => {
        return (
            
            <div className="FighterCard" key={idx}>
                <Link to={`/fighters/${fighter._id}`}>
                <div className="FighterName">
                    <h2>{fighter.name}</h2>
                </div>
                <img className="fighter-images" src={fighter.image} alt={fighter.name}></img>
                <div className="f-card-body">
                    <h3>{`"${fighter.nickname}"`}</h3>
                    <h4>{fighter.stance}</h4>
                    <h5>{fighter.weight}</h5>
                    <h5>{fighter.weightclass}</h5>
                    <h5>{fighter.record}</h5>
                </div>
                </Link>
            </div>
        )
    })

  return (
    <div className="FightersPage">
        <h1>FIGHTERS</h1>
        <div className="FighterContainer">
            {loadFighters}
        </div>
    </div>
  )
}

export default Fighters