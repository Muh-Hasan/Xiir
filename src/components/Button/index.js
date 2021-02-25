import React from "react"

const Button = ({ text, className }) => {
  return (
    <button className={`btn ${className}`}>
      <span>{text}</span>
    </button>
  )
}

export default Button
