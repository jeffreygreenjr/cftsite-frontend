import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/FighterShow.css";

function FighterShow(props) {

    console.log(props)

    const [fighter, setFighter] = useState({})

    const navigate = useNavigate();
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

    const[editForm, setEditForm] = useState(fighterId)
    const [isActive, isSetActive] = useState('false')
    const [isDelete, isSetDelete] = useState('false')

    const handleChange = (e) =>{
        setEditForm({...editForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.editFighter(editForm, fighterId)
        navigate('/fighters')
    }

    const handleToggle = () =>{
        isSetActive(!isActive)
    }
 
    const handleDelete =() =>{
        props.deleteFighter(isDelete, fighterId)
        navigate('/fighters')
    }

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
            <div className="ShowPageButtons">
                <button className="EditButton" onClick={handleToggle}>EDIT</button>
                <button className="DeleteButton" onClick={handleDelete}>DELETE</button>
            </div>
            <div className={isActive ? "hiddenForm" : null}>
                <form className="EditForm" onSubmit={handleSubmit}>
                <input className="e name" type="text" name="name"  placeholder="Full Name" value={editForm.name} onChange={handleChange}/>
                <input className="e nickname" type="text" name="nickname"  placeholder="Nickame" value={editForm.nickname} onChange={handleChange}/>
                <input className="e stance" type="text" name="stance"  placeholder="Stance" value={editForm.stance} onChange={handleChange}/>
                <input className="e weight" type="text" name="weight"  placeholder="Weight" value={editForm.weight} onChange={handleChange}/>
                <input className="e weightclass" type="text" name="weightclass"  placeholder="Weight Class" value={editForm.weightclass} onChange={handleChange}/>
                <input className="e record" type="text" name="record"  placeholder="Record" value={editForm.record} onChange={handleChange}/>
                <input className="e image" type="text" name="image"  placeholder="Headshot" value={editForm.image} onChange={handleChange}/>
                <input className="e competitiontype" type="text" name="competitiontype"  placeholder="Competition Type (ex. MMA, Boxing, BJJ)" value={editForm.competitiontype} onChange={handleChange}/>
                <input className="e promotions" type="text" name="promotions"  placeholder="Promotions (ex. UFC, Bellator)" value={editForm.promotions} onChange={handleChange}/>
                <button type="submit" className="submitbutton">Edit Fighter</button>
            </form>
            </div>        
    </div>
  )
}

export default FighterShow