import "../styles/NewClass.css"
import React from 'react'
import CreateClassForm from '../components/CreateClassForm'

function NewClass() {
  return (
    <div className="CreateNewClassPage">
    <h1>Create New Class</h1>
    <div className="CreateClassFormContainer">
        <CreateClassForm />
    </div>
</div>
  )
}

export default NewClass