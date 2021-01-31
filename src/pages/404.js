import React from "react"
import { Link } from "@reach/router"
const Error = () => {
  return (
    <div className="text-center">
      <h2>Page not found</h2>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  )
}

export default Error
