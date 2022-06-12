import "../styles/CreateCoachForm.css"
import React from 'react'
import { useState } from 'react'

function CreateCoachForm(props) {

    const[newCoachForm, setNewCoachForm] = useState({
        name: "",
        teaches: "",
        belt: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCoachForm({...newCoachForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createFighter(newCoachForm)
        setNewCoachForm({
            name: "",
            teaches: "",
            belt: "",
            image: ""
        })
    }

  return (
    <div className="CreateCoachForm">
        <form className="CreateForm" onSubmit={handleSubmit}>
            <input className="c name" type="text" name="name"  placeholder="Full Name" value={newCoachForm.name} onChange={handleChange}/>
            <input className="c teaches" type="text" name="teaches"  placeholder="Teaches (ex. Beginner Striking, Advanced Striking, No Gi BJJ)" value={newCoachForm.teaches} onChange={handleChange}/>
            <input className="c belt" type="text" name="belt"  placeholder="Belt" value={newCoachForm.belt} onChange={handleChange}/>
            <input className="c image" type="text" name="image"  placeholder="Headshot" value={newCoachForm.image} onChange={handleChange}/>    
            <button type="submit" className="submitbutton">Create New Coach</button>
        </form>
    </div>
  )
}

export default CreateCoachForm