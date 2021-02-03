import React, { useState, useRef } from "react"
import "./Accordion.css"

function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [showMinus, setShowMinus] = useState(false)
  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setShowMinus(!showMinus)
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
  }

  return (
    <div className="card">
      <div className={`card-header ${setActive}`}>
        <h2 className="mb-0 collapsed" onClick={toggleAccordion}>
          <span>{props.title}</span>
          <p className="accordion__icon">{showMinus ? "-" : "+"}</p>
        </h2>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}
export default Accordion
