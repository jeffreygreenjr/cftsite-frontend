import "../styles/NewFighter.css"
import React from 'react'
import CreateFighterForm from '../components/CreateFighterForm'
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewFighter(props) {

  console.log(props.getFighterData)

  const navigate = useNavigate()

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

function handleChange(e) {
    setNewFighter({...newFighter,
       [e.target.name]: e.target.value
    })
    // console.log(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    props.createFighter(newFighter)
    setNewFighter({
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
    navigate('/fighters')
    console.log(newFighter)
}

  return (
    <div className="CreateNewFighterPage">
        <h1>Create New Fighter</h1>
        <div className="CreateFighterFormContainer">
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
        </div>
    </div>
  )
}

export default NewFighter