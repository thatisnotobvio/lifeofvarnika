import { Routes, Route } from "react-router-dom"
import Journey from "./components/Journey"
import Navbar from "./components/Navbar"
import World from "./components/World"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>

    </>
  )
}

export default App