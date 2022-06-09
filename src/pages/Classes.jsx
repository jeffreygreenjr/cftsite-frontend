import React from 'react';
import { useState, useEffect } from "react";

function Classes(props) {

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
            <div className="ClassList" key={idx}>
                <h2>{classId.name}</h2>
                <h3>{classId.schedule}</h3>
                <img className="class-images" src={classId.image} alt={classId.name}></img>
            </div>
        )
    })
           
  return (
    <div>
        <h1>Classes</h1>
        {loadClasses}
    </div>
    
  )
}

export default Classes