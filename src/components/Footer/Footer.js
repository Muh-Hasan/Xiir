import React from "react"
import "./Footer.css"
import emailjs from "emailjs-com"

// images
import Linkedin from "../../assets/images/linkedin.png"
import Twitter from "../../assets/images/twitter.png"
import Youtube from "../../assets/images/youtube.png"
import Logo from "../../assets/images/logoBlue.png"

import { Link } from "@reach/router"
const Footer = () => {
  const handleSubmit = e => {
    console.log(e)
    e.preventDefault()
    emailjs
      .sendForm(
        "service_xeshyh7",
        "template_j5o5iyo",
        e.target,
        "user_mH2VkDTDY0g5ysxeoF9oE"
      )
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-between ">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 col-tagline">
              <div className=" header-icon">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <h2>smart oversight </h2>
              <h5>sales@xiir.com</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-menu">
              <h2>Menu</h2>
              <ul className="foot-menu">
                <li>
                  <button className="foot-btn">test drive</button>
                </li>
                <li>
                  <button className="foot-btn">services</button>
                </li>
                <li>
                  <button className="foot-btn">partners</button>
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
                  <form onSubmit={handleSubmit}>
                    <input
                      placeholder="your email"
                      type="email"
                      name="user_email"
                    />
                    <button type="submit">submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom  container ">
          <div className="social-media d-flex align-items-center justify-content-between">
            <div className="social-media d-flex align-items-center justify-content-between">
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
            </div>
            <li>
              <a
                href="/src/assets/images/Xiir Frameworks datasheet.pdf"
                download="Xiir Frameworks datasheet.pdf"
              >
                <p>Privacy</p>
              </a>
            </li>
            <li>
              <p> | </p>
            </li>
            <li>
              <a
                href="/src/assets/images/Xiir Frameworks datasheet.pdf"
                download="Xiir Frameworks datasheet.pdf"
              >
                <p>Terms</p>
              </a>
            </li>
            <li>
              <p> | </p>
            </li>
            <li>
              <p>Pay </p>
            </li>
            <li>
              <p> | </p>
            </li>
            <li>
              <p>© 2021 Xiir</p>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
