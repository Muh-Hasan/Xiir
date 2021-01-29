import React from "react"
import "./Footer.css"

// images
import Linkedin from "../../images/linkedin.png"
import Twitter from "../../images/twitter.png"
import Youtube from "../../images/youtube.png"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-between ">
            <div className="col-sm-12 col-md-3 col-lg-4 col-tagline">
              <h2>xiir</h2>
              <h2>smart compliance oversight </h2>
              <h5>sales@xiir.com</h5>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-4 footer-menu">
              <h2>Menu</h2>
              <ul className="foot-menu">
                <li>
                  <button className="btn">services</button>
                </li>
                <li>
                  <button className="btn">parthners</button>
                </li>
                <li>
                  <button className="btn">test drive</button>
                </li>
                <li>
                  <button className="btn">about us</button>
                </li>
                <li>
                  <button className="btn">blogs</button>
                </li>
                <li>
                  <button className="btn">contact</button>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-4 footer-form">
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
              <img src={Linkedin} alt="Linkedin" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" />
            </li>
            <li>
              <img src={Youtube} alt="Youtube" />
            </li>
          </ul>
          <p>© 2019 Aiir</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
