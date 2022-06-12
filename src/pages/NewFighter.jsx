import "../styles/NewFighter.css"
import React from 'react'
import CreateFighterForm from '../components/CreateFighterForm'

function NewFighter(props) {
  return (
    <div className="CreateNewFighterPage">
        <h1>Create New Fighter</h1>
        <div className="CreateFighterFormContainer">
            <CreateFighterForm />
        </div>
    </div>
  )
}

export default NewFighter