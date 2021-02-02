import React, { useState, useRef } from "react"
import Chevron from "./Chevron"

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
    <div className="accordion__section">
      <div className='accordion'>
        <button  onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <p className="accordion__icon">{showMinus ? "-" : "+"}</p>
        </button>
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
    </div>
  )
}
// className={`accordion ${setActive}`}
export default Accordion
