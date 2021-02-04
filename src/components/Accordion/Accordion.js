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
        className="accordion__content container d-flex flex-column"
      >
        <br />

        <div className="row align-items-center justify-content-between content-area">
          {props.img ? (
            <>
              <div className="col-sm-12 col-md-5 col-lg-5 accordion__text">
                <h3>{props.content}</h3>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 acc-img">
                <img src={props.img} alt={props.content} className="img" />
              </div>
              <div>
              </div>
            </>
          ) : (
            <div className="accordion__text container">
                <h3>{props.content}</h3>
              </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Accordion
