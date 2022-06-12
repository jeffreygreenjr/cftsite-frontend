import "../styles/CreateFighterForm.css"
import React from 'react'
import { useState } from 'react'

function CreateFighterForm() {

    const[newFighter, setNewFighter] = useState({
        name: "",
        nickname: "",
        stance: "",
        weight: "",
        weightclass: "",
        record: "",
        image: "",
        competitiontype: "",
        promotions: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        (newFighter)
        setNewFighter({
            name: e.target.value.name,
            nickname: e.target.value.nickname,
            stance: e.target.value.stance,
            weight: e.target.value.weight,
            weightclass: e.target.value.weightclass,
            record: e.target.value.record,
            image: e.target.value.image,
            competitiontype: e.target.value.competitiontype,
            promotions: e.target.value.promotions,
        })
        console.log(e.target.value)
    }

    function handleChange(e) {
        setNewFighter({...newFighter,
           [e.target.name]: e.target.value
        })
    }

  return (
    <div className="CreateFighterForm">
        <form className="CreateForm" onSubmit={handleSubmit}>
            <input className="f name" type="text" name="name"  placeholder="Full Name" value={newFighter.name} onChange={handleChange}/>
            <input className="f nickname" type="text" name="nickname"  placeholder="Nickame" value={newFighter.nickname} onChange={handleChange}/>
            <input className="f stance" type="text" name="stance"  placeholder="Stance" value={newFighter.stance} onChange={handleChange}/>
            <input className="f weight" type="text" name="weight"  placeholder="Weight" value={newFighter.weight} onChange={handleChange}/>
            <input className="f weightclass" type="text" name="weightclass"  placeholder="Weight Class" value={newFighter.weightclass} onChange={handleChange}/>
            <input className="f record" type="text" name="record"  placeholder="Record" value={newFighter.record} onChange={handleChange}/>
            <input className="f image" type="text" name="image"  placeholder="Headshot" value={newFighter.image} onChange={handleChange}/>
            <input className="f competitiontype" type="text" name="competitiontype"  placeholder="Competition Type (ex. MMA, Boxing, BJJ)" value={newFighter.competitiontype} onChange={handleChange}/>
            <input className="f promotions" type="text" name="promotions"  placeholder="Promotions (ex. UFC, Bellator)" value={newFighter.promotions} onChange={handleChange}/>
            <button type="submit" className="submitbutton">Create New Fighter</button>
        </form>
    </div>
  )
}

export default CreateFighterForm