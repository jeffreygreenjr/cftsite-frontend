import "../styles/Class.css"
import React from 'react';
import { useState, useEffect } from "react";

function Classes(props) {

    // CREATE STATE TO HOLD CLASS DATA
    const [classes, setClasses] = useState([])

    const getClassesData = async () => {
        const response = await fetch(props.URL + "classes")
        const data = await response.json()
        setClasses(data);
        console.log(data)
    }

    useEffect(() => {
        getClassesData()
    }, [props.URL]);

    const loadClasses = classes.map((classId, idx) => {
        return (
            <div className="ClassCard" key={idx}>
                <img className="class-images" src={classId.image} alt={classId.name}></img>
                <div className="ClassIdName">
                    <h2>{classId.name}</h2>
                </div>
                
                <h3>{classId.schedule}</h3>
            </div>
        )
    })
           
  return (
    <div className="ClassesPage">
        <h1>CLASSES</h1>
        <div className="ClassContainer">
            {loadClasses}
        </div>
    </div>
    
  )
}

export default Classes