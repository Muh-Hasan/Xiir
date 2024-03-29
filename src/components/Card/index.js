import React from "react"
import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"
import "./index.css"

const Card = ({ img, title, description, href }) => {
  return (
    <div className="blogCard">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="blog-des container">
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className="container row icons-share">
          <div>
            <h4>SHARE</h4>
          </div>
          <div>
            <TwitterShareButton url={href} color="none">
              <TwitterIcon size={30} />
            </TwitterShareButton>
          </div>
          <div>
            <LinkedinShareButton url={href}>
              <LinkedinIcon size={30} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
