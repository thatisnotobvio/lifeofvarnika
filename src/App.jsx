import { Routes, Route } from "react-router-dom"
import Journey from "./components/Journey"
import Navbar from "./components/Navbar"
import World from "./components/World"
import Projects from "./components/Projects"
import foreground from "./assets/journey/foreground.png"


function App() {

  return (
    <>
      <div className="app-container">
        <div className="tv-wrapper">
          <div className="tv-screen-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<World />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>

          <img src={foreground} alt="" className="tv-foreground"/>
        </div>
      </div>
    </>
  )
}

export default App