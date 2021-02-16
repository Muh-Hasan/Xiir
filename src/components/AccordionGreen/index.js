import React, { useState, useRef, useEffect } from "react"
import "./index.css"

function AccordionGreen({ content, title, img }) {
  const [active, setActive] = useState(false)
  const [showMinus, setShowMinus] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px"
  }, [contentRef, active])

  function toggleAccordion() {
    setActive(!active)
    setShowMinus(!showMinus)
  }

  return (
    <div className="card">
      <div className={`card-header ${active ? "active" : ""}`}>
        <h2 className="mb-0 collapsed" onClick={toggleAccordion}>
          <span>{title}</span>
          <p className="accordion__icon">{showMinus ? "-" : "+"}</p>
        </h2>
      </div>
      <div
        ref={contentRef}
        className="accordion__content container  d-flex flex-column"
      >
        <br />

        <div className="row align-items-center justify-content-between content-area">
          {img ? (
            <>
              <div className="col-sm-12 col-md-5 col-lg-5 accordion__text">
                <h3>{content}</h3>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 acc-img">
                <img src={img} alt={content} className="img" />
              </div>
              <div></div>
            </>
          ) : (
            <div className="accordion__text container">
              <h3>{content}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default AccordionGreen
