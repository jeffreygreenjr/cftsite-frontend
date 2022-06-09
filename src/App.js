import './App.css';

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Coaches from "./pages/Coaches";
import Fighters from "./pages/Fighters";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/about" element={< About />} />
        <Route exact path="/classes" element={< Classes />} />
        <Route exact path="/coachingstaff" element={< Coaches />} />
        <Route exact path="/fighters" element={< Fighters />} />
        <Route exact path="/shop" element={< Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
