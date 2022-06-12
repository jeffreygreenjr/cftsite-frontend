import "../styles/CreateClassForm.css"
import React from 'react'
import { useState } from 'react'

function CreateClassForm() {

    const[newClassForm, setNewClassForm] = useState({
        name: "",
        schedule: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewClassForm({...newClassForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        (newClassForm)
        setNewClassForm({
            name: "",
            schedule: "",
            image: ""
        })
    }

  return (
    <div className="CreateClassForm">
        <form className="CreateForm" onSubmit={handleSubmit}>
            <input className="c name" type="text" name="name"  placeholder="Class Name" value={newClassForm.name} onChange={handleChange}/>
            <input className="c schedule" type="text" name="schedule"  placeholder="Class Schedule" value={newClassForm.schedule} onChange={handleChange}/>
            <input className="c image" type="text" name="image"  placeholder="Headshot" value={newClassForm.image} onChange={handleChange}/>    
            <button type="submit" className="submitbutton">Create New Class</button>
        </form>
    </div>
  )
}

export default CreateClassForm