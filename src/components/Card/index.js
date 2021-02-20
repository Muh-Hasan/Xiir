import React from "react"
import { Link } from "gatsby"
import "./index.css"
const Card = ({ img, title, description }) => {
  return (
    <div className="blogCard">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="blog-des container">
        <Link to={`/blog/${title}`}>
          <h1>{title}</h1>
          <h4>{description}</h4>
        </Link>
      </div>
    </div>
  )
}

export default Card
