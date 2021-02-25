import React, { useState } from "react"
import { graphql } from "gatsby"
import emailjs from "emailjs-com"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Content from "../components/Content"
import Header from "../components/Header"
import AccordionGreen from "../components/AccordionGreen"
import Footer from "../components/Footer/Footer"

const Partners = ({ data }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const {
    allContentfulContentArea,
    allContentfulContactPage,
    allContentfulFrequentlyAskedQuestions,
  } = data
  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_qkbep48",
        "template_vo1uex8",
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
    setName("")
    setMessage("")
  }
  return (
    <div>
      <Header />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 contact-tagline">
              <h3 className="headings-of-all">partners</h3>
              <div>
                <h2>{allContentfulContactPage.nodes[0].tagline}</h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contct-form-area">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only">Full name</label>
                    <input
                      placeholder="FULL NAME"
                      value={name}
                      type="text"
                      name="user_name"
                      onChange={e => setName(e.currentTarget.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <input
                      placeholder="EMAIL"
                      value={email}
                      type="email"
                      name="user_email"
                      onChange={e => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Message</label>
                    <textarea
                      placeholder="MESSAGE"
                      value={message}
                      type="email"
                      name="user_message"
                      onChange={e => setMessage(e.currentTarget.value)}
                    />
                  </div>
                  <button className="btn btn-purple" type="submit">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section container contact-mat">
        <div className="row contact-info container ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
            <img
              src={allContentfulContactPage.nodes[0].phoneIcon.file.url}
              alt={allContentfulContactPage.nodes[0].dublinOfficeNum}
            />
            <h5>{allContentfulContactPage.nodes[0].dublinOfficeNum}</h5>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
            <img
              src={allContentfulContactPage.nodes[0].emailIcon.file.url}
              alt={allContentfulContactPage.nodes[0].tagline}
            />
            <h5>{allContentfulContactPage.nodes[0].email}</h5>
          </div>
        </div>
        <div className="gif">
          <img src={allContentfulContactPage.nodes[0].gif.file.url} alt="gif" />
        </div>
      </section>

      <div className="section-padding-2">
        <Content
          pOne={allContentfulContentArea.nodes[3].textPointsOne}
          pTwo={allContentfulContentArea.nodes[3].textPointsTwo}
          pThree={allContentfulContentArea.nodes[3].textPointThree}
          Heading={allContentfulContentArea.nodes[3].textMainHeading}
          sideOne={allContentfulContentArea.nodes[3].textMainOne}
          sideTwo={allContentfulContentArea.nodes[3].textMainTwo}
          smallOne={allContentfulContentArea.nodes[3].textSideOne}
          className="gr-bg"
        />
      </div>
      <section className="section-padding d-flex">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>
                  {allContentfulFrequentlyAskedQuestions.nodes
                    .slice(3)
                    .map((v, i) => (
                      <AccordionGreen
                        title={v.title}
                        content={documentToReactComponents(
                          JSON.parse(v.description.raw)
                        )}
                        key={i}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Partners

export const qurey = graphql`
  query {
    allContentfulContactPage {
      nodes {
        dublinOfficeNum
        headQuartersNum
        email
        tagline
        phoneIcon {
          file {
            url
          }
        }
        emailIcon {
          file {
            url
          }
        }
        gif {
          file {
            url
          }
        }
      }
    }

    allContentfulContentArea {
      nodes {
        textMainHeading
        textMainOne
        textMainTwo
        textPointThree
        textPointsOne
        textPointsTwo
        textSideOne
      }
    }
    allContentfulFrequentlyAskedQuestions {
      nodes {
        title
        description {
          raw
        }
      }
    }
  }
`
