import './App.css';

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import NewClass from "./pages/NewClass";
import Coaches from "./pages/Coaches";
import NewCoach from "./pages/NewCoach";
import Fighters from "./pages/Fighters";
import NewFighter from "./pages/NewFighter";
import FighterShow from "./pages/FighterShow";
import Shop from "./pages/Shop";
import ThankYou from "./pages/ThankYou";

function App() {

  // HEROKU URL FOR MY BACKEND
  const URL = "http://localhost:4000/"
  const URL2 = "http://localhost:4000/fighters/create"

    // CREATE STATE TO HOLD FIGHTER DATA
    const [fighters, setFighters] = useState([])

    useEffect(() => {
      getFighterData()
    }, [URL]);

    const getFighterData = async () => {
        const response = await fetch(URL + "fighters")
        const data = await response.json()
        setFighters(data);
        // console.log(data)
    }

    const createFighter = async(fighter) => {
      await fetch(URL2,{
          method:'POST',
          headers:{
              'Content-Type': 'application/json',
          },
          body:JSON.stringify(fighter)
      })
      getFighterData()  
  }

  // useEffect(() => {
  //   createFighter()
  // }, [URL]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/about" element={< About URL={URL} />} />
        <Route exact path="/classes" element={< Classes URL={URL} />} />
        <Route exact path="/classes/create" element={< NewClass URL={URL} />} />
        <Route exact path="/coachingstaff" element={< Coaches URL={URL} />} />
        <Route exact path="/coachingstaff/create" element={< NewCoach URL={URL} />} />
        <Route exact path="/fighters" element={< Fighters URL={URL} />} />
        <Route exact path="/fighters/create" element={< NewFighter getFighterData={getFighterData}
        createFighter={createFighter} />} />
        <Route exact path="/fighters/:id" element={< FighterShow URL={URL} fighters={fighters} getFighterData={getFighterData} />} />
        <Route exact path="/shop" element={< Shop URL={URL} />} />
        <Route exact path="/thankyou" element={< ThankYou URL={URL} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
