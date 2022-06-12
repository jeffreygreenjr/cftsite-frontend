import "../styles/NewCoach.css"
import React from 'react'
import CreateCoachForm from '../components/CreateCoachForm'

function NewCoach(props) {



  return (
    <div className="CreateNewCoachPage">
        <h1>Create New Coach</h1>
        <div className="CreateCoachFormContainer">
            <CreateCoachForm />
        </div>
    </div>
  )
}

export default NewCoach