import React, { useRef } from "react"
import gsap from "gsap"
import { Link, useStaticQuery, graphql } from "gatsby"
// CSS
import "./Header.css"
// Images
import Logo from "../../assets/images/xiir.png"
import Close from "../../assets/images/closeMenu.svg"
import LogoWhite from "../../assets/images/logoWhite.png"

const Header = () => {
  const hiddenMenu = useRef(null)

  const showHiddenMenu = () => {
    gsap.to(hiddenMenu.current, { opacity: 1, width: "100%" })
  }
  const closeHiddenMenu = () => {
    gsap.to(hiddenMenu.current, { opacity: 0, width: "0%" })
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeader {
        nodes {
          logoBlue {
            file {
              url
            }
          }
          logo {
            file {
              url
            }
          }
          mainText
          rightText
          btnFour
          btnFive
          btnOne
          btnThree
          btnTwo
          leftText
        }
      }
    }
  `)
  const { allContentfulHeader } = data
  return (
    <div className="website-header">
      <header className="site-header fixed-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col header-icon">
              <Link to="/">
                <img src={allContentfulHeader.nodes[0].logoBlue.file.url} alt="logo" />
              </Link>
            </div>
            <div className="col text-center main-text">
              <h1>{allContentfulHeader.nodes[0].mainText}</h1>
            </div>
            <div className="col main-triger">
              <div className="main-div">
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
                  <img src={allContentfulHeader.nodes[0].logo.file.url} alt="logo" />
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
                    <Link to="/testDrive">
                      <button>{allContentfulHeader.nodes[0].btnOne}</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <button>{allContentfulHeader.nodes[0].btnTwo}</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/partners">
                      <button>{allContentfulHeader.nodes[0].btnThree}</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <button>{allContentfulHeader.nodes[0].btnFour}</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <button>{allContentfulHeader.nodes[0].btnFive}</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="container-fluid menu-footer d-flex justify-content-between">
                <div className="col menu-tagline">
                  <h2>{allContentfulHeader.nodes[0].leftText}</h2>
                </div>
                <div className="col menu-footer-login d-md-block">
                  <h2>
                    <a href="https://xiir.com/" target="blank">
                      {allContentfulHeader.nodes[0].rightText}
                    </a>
                  </h2>
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
