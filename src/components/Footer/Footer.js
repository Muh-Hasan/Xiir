import React, { useState } from "react"
import emailjs from "emailjs-com"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./Footer.css"
import Linkedin from "../../assets/images/linkedin.png"
import Twitter from "../../assets/images/twitter.png"
import Youtube from "../../assets/images/youtube.png"

const Footer = () => {
  const [email, setEmail] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_qkbep48",
        "template_95d163x",
        e.target,
        "user_H1giHzeT00K7WW4tInQOn"
      )
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error.text)
        }
      )
    emailjs
      .sendForm(
        "service_qkbep48",
        "template_8hke6d4",
        e.target,
        "user_H1giHzeT00K7WW4tInQOn"
      )
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error.text)
        }
      )
    setEmail("")
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        nodes {
          email
          logo {
            file {
              url
            }
          }
          subTitle
          updates
          txtTwo
          txtThree
          txtOne
          txtFour
        }
      }
      allContentfulHeader {
        nodes {
          btnFour
          btnFive
          btnOne
          btnThree
          btnTwo
        }
      }
    }
  `)
  const { allContentfulFooter, allContentfulHeader } = data
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-between ">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 col-tagline">
              <div className="header-icon margin-bot">
                <Link to="/">
                  <img
                    src={allContentfulFooter.nodes[0].logo.file.url}
                    alt="logo"
                  />
                </Link>
              </div>
              <h2>{allContentfulFooter.nodes[0].subTitle}</h2>
              <h5>{allContentfulFooter.nodes[0].email}</h5>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-menu">
              <h2>Menu</h2>
              <ul className="foot-menu">
                <li>
                  <Link to="/testDrive">
                    <button className="foot-btn">
                      {allContentfulHeader.nodes[0].btnOne}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <button className="foot-btn">
                      {allContentfulHeader.nodes[0].btnTwo}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/partners">
                    <button className="foot-btn">
                      {allContentfulHeader.nodes[0].btnThree}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <button className="foot-btn">
                      {allContentfulHeader.nodes[0].btnFour}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <button className="foot-btn">
                      {allContentfulHeader.nodes[0].btnFive}
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-form">
              <h2>{allContentfulFooter.nodes[0].updates}</h2>
              <div className="footer-subscribe-form">
                <div>
                  <form onSubmit={handleSubmit}>
                    <input
                      placeholder="your email"
                      value={email}
                      type="email"
                      name="user_email"
                      onChange={e => setEmail(e.currentTarget.value)}
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
            <div className="social-media d-flex align-items-center justify-content-between pay">
              <li>
                <a href="https://docs.google.com/uc?export=download&id=118Nvc-kQcwznRaQKVFjcDQGOLNqhc4cy">
                  <p>{allContentfulFooter.nodes[0].txtOne}</p>
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/uc?export=download&id=118Nvc-kQcwznRaQKVFjcDQGOLNqhc4cy">
                  <p>{allContentfulFooter.nodes[0].txtTwo}</p>
                </a>
              </li>
              <li>
                <Link to="/pay">
                  <p>{allContentfulFooter.nodes[0].txtThree}</p>
                </Link>
              </li>
            </div>
            <li>
              <p>{allContentfulFooter.nodes[0].txtFour}</p>
            </li>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
