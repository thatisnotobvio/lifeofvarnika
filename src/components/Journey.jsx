import { useState, useEffect } from "react"
//main
import background from "../assets/journey/background.png"
import floor from "../assets/journey/floor.png"
import spotlight from "../assets/journey/spotlight.png"
import scrollBg from "../assets/journey/scroll-bg.png"
//statues
import statue1 from "../assets/journey/statue1.png"
import statue2 from "../assets/journey/statue2.png"
import statue3 from "../assets/journey/statue3.png"
import statue4 from "../assets/journey/statue4.png"
import statue5 from "../assets/journey/statue5.png"
import statue6 from "../assets/journey/statue6.png"
//arrow keys
import leftArrow from "../assets/journey/left.png"
import rightArrow from "../assets/journey/right.png"

export default function Journey() {

  const statues = [
    {
      image: statue1,
      title: "Snow in Marshville",
      author: "Seogyo",
      date: "2019.12.02 - 2020.01.01",
      description:
        "Winter — the season Marshville residents love the most!",
    },
    {
      image: statue2,
      title: "Spring Garden",
      author: "Seogyo",
      date: "2020.03.01",
      description: "A peaceful spring scene.",
    },
    {
      image: statue3,
      title: "Summer Market",
      author: "Seogyo",
      date: "2020.06.15",
      description: "The market comes alive in summer.",
    },
    {
      image: statue4,
      title: "Autumn Leaves",
      author: "Seogyo",
      date: "2020.10.10",
      description: "Golden leaves fall across the village.",
    },
    {
      image: statue5,
      title: "Winter Night",
      author: "Seogyo",
      date: "2021.01.01",
      description: "A quiet snowy evening.",
    },
    {
      image: statue6,
      title: "Village Festival",
      author: "Seogyo",
      date: "2021.05.12",
      description: "The biggest celebration in Marshville.",
    }
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedStatue, setSelectedStatue] = useState(null)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % statues.length)
  }

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? statues.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
      next()
      }

      if (e.key === "ArrowLeft") {
      prev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex])


  return (
    <div className="journey-container">
      <img src={background} className="journey-bg" 
      style={{ transform: `translate(-${activeIndex * 40}px)`}} />

      {/* Spotlight */}
      <div className="spotlight-wrapper">
        <img src={spotlight} className="spotlight" />
      </div>

      {/* Statue Row */}
      <div className="statue-row" style={{transform: `translateX(-${activeIndex * 420}px)`}}>
        {statues.map((statue, index) => (
          <div
            key={index}
            className={`statue-wrapper ${index === activeIndex ? "active" : ""}`}
          >
            <img src={spotlight} className="spotlight" />
            <img
              src={statue.image}
              className="statue"
              onClick={() => index === activeIndex && setSelectedStatue(statue)}
            />
          </div>
        ))}
      </div>

      <img src={floor} className="journey-floor" 
      style={{ transform: `translate(-${activeIndex * 40}px)`}} />

      {/* Controls */}
      <div className="journey-nav left" onClick={prev}>
        <img src={leftArrow} alt="Previous" />
      </div>

      <div className="journey-nav right" onClick={next}>
        <img src={rightArrow} alt="Next" />
      </div>

      {/*POP UP*/}
      {
        selectedStatue && (
          <div className="scroll-overlay" onClick={() => setSelectedStatue(null)}>
            <div className="scroll-popup" onClick={(e) => e.stopPropagation()} style={{backgroundImage: `url(${scrollBg})`}}>
              <button className="close-btn" onClick={() => setSelectedStatue(null)}> X </button>
              <div className="scroll-content">  
                <h1>{selectedStatue.title}</h1>
                <p> object {selectedStatue.author}</p>
                <p>{selectedStatue.date}</p>
                <p>{selectedStatue.description}</p>
                <img src={selectedStatue.image}/>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}