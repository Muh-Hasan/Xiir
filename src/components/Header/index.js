import React, { useRef, useState } from "react"
import Logo from "../../images/xiir.png"
import "./index.css"
import gsap from "gsap"
const Header = () => {
  const menu = useRef(null)
  const [showM, setShowM] = useState(false)
  function showMenu() {
    setShowM(true)
    gsap.to(menu.current, { width: "100%" })
  }
  return (
    <>
      <header className="siteHeader">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={Logo} alt="logo" height="40px" />
            </div>
            <div className="col text-center">
              <h1 className="siteText">smart compliance oversight</h1>
            </div>
            <div className="col text-right">
              <button className="btn" onClick={() => showMenu()}>
                <span>menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {showM ? (
        <div ref={menu} className="overlay">
          <button
            onClick={() => {
              gsap.to(menu.current, { width: "0" })
              // setShowM(false)
            }}
          >
            x
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Header
