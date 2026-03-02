import {useRef} from "react"
import { useNavigate } from "react-router-dom"
import worldImage from "../assets/world.png"
import statue from "../assets/buildings/statue.png"
import playground from "../assets/buildings/playground.png"
import projects from "../assets/buildings/projects.png"
import journey from "../assets/buildings/journey.png"

//hover
import statueHover from "../assets/buildings/statue-hover.png"
import journeyHover from "../assets/buildings/journey-hover.png"
import playgroundHover from "../assets/buildings/playground-hover.png"
import projectsHover from "../assets/buildings/projects-hover.png"


export default function World(){
    const worldLayerRef = useRef(null)
    const navigate = useNavigate()
    
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15
        const y = (e.clientY / window.innerHeight - 0.5) * 15
    
        worldLayerRef.current.style.transform =
        `translate(${x}px, ${y}px)`
    }

    return(
        <div className="world-container" onMouseMove={handleMouseMove}>
            <div ref={worldLayerRef} className="world-layer">
        
                <img src={worldImage} className="world-map" />
        
                <div className="hover-item" style={{ top: "47.08%", left: "41.40%" }}>
                  <div className="building-wrapper">
                    <img src={statue} className="building normal statue-size" />
                    <img src={statueHover} className="building hover hover-word" />
                  </div>
                </div>
        
                <div className="hover-item" style={{ top: "38.08%", left: "16.85%" }}>
                  <div className="building-wrapper">
                    <img src={playground} className="building normal playground-size" />
                    <img src={playgroundHover} className="building hover hover-word" />
                  </div>
                </div>
        
                <div className="hover-item" style={{ top: "34.00%", left: "63.45%" }}>
                  <div className="building-wrapper">
                    <img src={projects} className="building normal projects-size" />
                    <img src={projectsHover} className="building hover hover-word" />
                  </div>
                </div>
        
                <div className="hover-item" style={{ top: "5.78%", left: "23.45%" }} onClick={() => navigate("/journey")}>
                  <div className="building-wrapper">
                    <img src={journey} className="building normal journey-size" />
                    <img src={journeyHover} className="building hover hover-word" />
                  </div>
                </div>
        
            </div>
        </div>
    )
}