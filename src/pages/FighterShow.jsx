import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/FighterShow.css";

function FighterShow(props) {

    console.log(props)

    const [fighter, setFighter] = useState({})

    const params = useParams();

    const fighterId = params.id
    console.log(fighterId)

    const URL = `${props.URL}fighters/${fighterId}`

    async function getFighterInfo() {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(`Look ${JSON.stringify(data.name)}`)
        setFighter(data)
    }

    useEffect(() => {
        getFighterInfo()
    }, [])

    // const loadFighter = fighter.map((fighterId, idx) => {
    //     return (
    //         <div className="FighterCard" key={idx}>
    //             <div className="FighterName">
    //                 <h2>{fighter.name}</h2>
    //             </div>
    //             <img className="fighter-images" src={fighter.image} alt={fighter.name}></img>
    //             <div className="f-card-body">
    //                 <h3>{`"${fighter.nickname}"`}</h3>
    //                 <h4>{fighter.stance}</h4>
    //                 <h5>{fighter.weight}</h5>
    //                 <h5>{fighter.weightclass}</h5>
    //                 <h5>{fighter.record}</h5>
    //             </div>
    //         </div>
    //     )
    // })

  return (
    <div className="FighterShowPage">
        <h1>Fighter Profile</h1>
        <div className="FighterCard">
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
            </div>        
    </div>
  )
}

export default FighterShow