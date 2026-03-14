import {useState, useEffect} from "react"
import background from "../assets/projects/project-background.png"
import scrollBg from "../assets/projects/project-background.png"
import building1 from "../assets/projects/building1.png"
import building2 from "../assets/projects/building2.png"
import building3 from "../assets/projects/building3.png"
import building4 from "../assets/projects/building4.png"
import building1Hover from "../assets/projects/Fins AI.png"
import building2Hover from "../assets/projects/Finspectors.png"
import building3Hover from "../assets/projects/Kennar Health.png"
import building4Hover from "../assets/projects/Seimens.png"

export default function Project() {

    const projects = [
        { image: building1, hover: building1Hover, title: "Fins AI", description: "Description for Fins AI" },
        { image: building2, hover: building2Hover, title: "Finspectors", description: "Description for Finspectors" },
        { image: building3, hover: building3Hover, title: "Kennar Health", description: "Description for Kennar Health" },
        { image: building4, hover: building4Hover, title: "Siemens Energy", description: "Description for Siemens" },
        { image: building1, hover: building1Hover, title: "Fins AI", description: "Description for Fins AI" },

    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)

    const next = () => setActiveIndex((prev) => (prev + 1) % projects.length)
    const prev = () => setActiveIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") next()
            if (e.key === "ArrowLeft") prev()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [activeIndex])

    return (
        <div className="projects-container">

            {/* Background */}
            <img
                src={background}
                className="projects-bg"
                style={{ transform: `translateX(-${activeIndex * 40}px)` }}
            />

            {/* Buildings Row */}
            <div
                className="buildings-row"
                style={{ transform: `translateX(-${activeIndex * 520}px)` }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`building-slot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => index === activeIndex && setSelectedProject(project)}
                    >
                        <div className="building-wrapper">
                            <img src={project.image} className="project-building normal" />
                            <img src={project.hover} className="project-building hover" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="projects-dots">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === activeIndex ? "dot-active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            {/* Popup */}
            {selectedProject && (
                <div className="scroll-overlay" onClick={() => setSelectedProject(null)}>
                    <div
                        className="scroll-popup"
                        onClick={(e) => e.stopPropagation()}
                        style={{ backgroundImage: `url(${scrollBg})` }}
                    >
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>X</button>
                        <div className="scroll-content">
                            <h1>{selectedProject.title}</h1>
                            <p>{selectedProject.description}</p>
                            <img src={selectedProject.image} />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}