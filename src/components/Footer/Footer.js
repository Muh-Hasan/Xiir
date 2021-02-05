import React from "react"
import "./Footer.css"

// images
import Linkedin from "../../images/linkedin.png"
import Twitter from "../../images/twitter.png"
import Youtube from "../../images/youtube.png"

import { Link } from "@reach/router"
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-between ">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 col-tagline">
              <h1>xiir</h1>
              <h2>smart oversight </h2>
              <h5>sales@xiir.com</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-menu">
              <h2>Menu</h2>
              <ul className="foot-menu">
                <li>
                  <button className="foot-btn">services</button>
                </li>
                <li>
                  <button className="foot-btn">test drive</button>
                </li>
                <li>
                  <button className="foot-btn">partners</button>
                </li>
                <li>
                  <Link to="/about">
                    <button className="foot-btn">about</button>
                  </Link>
                </li>
                <li>
                  <button className="foot-btn">blog</button>
                </li>
                <li>
                  <button className="foot-btn">contact</button>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-form">
              <h2>For updates on interesting stuff.</h2>
              <div className="footer-subscribe-form">
                <div>
                  <input placeholder="your email" />
                  <button>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <ul className="social-media">
            <li>
              <a
                href="https://www.linkedin.com/company/senior-managers/"
                target="blank"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
            <li className="li-margin">
              <a href="https://twitter.com/seniormanagers" target="blank">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li className="li-margin-1">
              <a
                href="https://www.youtube.com/channel/UC396CWlr8A_p36XNW-QJMMg"
                target="blank"
              ></a>
              <img src={Youtube} alt="Youtube" />
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between privacy">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Pay</p>
          </div>
          <p>© 2021 Xiir</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
