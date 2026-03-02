import { useState, useEffect } from "react"
//main
import background from "../assets/journey/background.png"
import floor from "../assets/journey/floor.png"
import spotlight from "../assets/journey/spotlight.png"
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

  const statues = [statue1, statue2, statue3, statue4, statue5, statue6]
  const [activeIndex, setActiveIndex] = useState(0)

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
              src={statue}
              className="statue"
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
    </div>
  )
}