import React from "react"
import "./index.css"
const Card = ({ img, title, description }) => {
  return (
    <div className="blogCard">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="blog-des container">
          <h1>{title}</h1>
          <h4>{description}</h4>
      </div>
    </div>
  )
}

export default Card
