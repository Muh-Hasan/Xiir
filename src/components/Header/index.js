import React, { useRef } from "react"
import Logo from "../../images/xiir.png"
import Close from "../../images/closeMenu.svg"
import "./Header.css"
import gsap from "gsap"
import { Link } from "@reach/router"
const Header = () => {
  const hiddenMenu = useRef(null)

  const showHiddenMenu = () => {
    gsap.to(hiddenMenu.current, { opacity: 1, width: "100%" })
  }
  const closeHiddenMenu = () => {
    gsap.to(hiddenMenu.current, { opacity: 0, width: "0%" })
  }

  return (
    <div className="website-header">
      <header className="site-header fixed-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col header-icon">
              <Link to='/'>
              <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="col text-center main-text">
              <h1> smart compliance oversight</h1>
            </div>
            <div className="col main-triger">
              <div style={{ textAlign: "right" }}>
                <button onClick={() => showHiddenMenu()}>
                  <span>menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={hiddenMenu} className="menu-wrapper">
          <header className="menu-header">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col header-icon">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="col menu-close-triger">
                  <div style={{ textAlign: "right" }}>
                    <button
                      className="close-menu-triger"
                      onClick={() => closeHiddenMenu()}
                    >
                      <img src={Close} alt="close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="container menu-content">
            <div className="row">
              <div className="container-fluid main-menu d-flex justify-content-center flex-column align-items-center">
                <ul>
                  <li>
                    <button>services</button>
                  </li>
                  <li>
                    <button>parthners</button>
                  </li>
                  <li>
                    <button>test drive</button>
                  </li>
                  <li>
                    <Link to='/about'>
                    <button>about us</button>
                    </Link>
                  </li>
                  <li>
                    <button>blogs</button>
                  </li>
                  <li>
                    <button>contact</button>
                  </li>
                </ul>
              </div>
              <div className="container-fluid menu-footer d-flex justify-content-between">
                <div className="col menu-tagline">
                  <h2>get smart with your  oversight</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
