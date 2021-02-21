import React from "react"
import { Link } from "@reach/router"
import Button from "../components/Button"
const Error = () => {
  return (
    <div className="text-center">
      <h2>Page not found</h2>
      <Link to="/">
        <Button className="btn-purple" text="Go To home" />
      </Link>
    </div>
  )
}

export default Error
