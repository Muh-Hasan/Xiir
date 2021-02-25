import React, { useState } from "react"
import { graphql } from "gatsby"
import emailjs from "emailjs-com"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import AccordionGreen from "../components/AccordionGreen"

const TestDrive = ({ data }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const {
    allContentfulTestDrive,
    allContentfulFrequentlyAskedQuestions,
    allContentfulContentArea,
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
  }
  return (
    <div>
      <Header />
      <section className="xiir-benefits contact-section">
        <div className="container">
          <div className="div-head">
            <h3 className="headings-of-all">Test Drive</h3>
            <h3 className="ser-head-2">
              {allContentfulTestDrive.nodes[0].title}
            </h3>
          </div>
          <br />
          <div className="div-para">
            <h4>{allContentfulTestDrive.nodes[0].description}</h4>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="d-flex flex-wrap">
            <div className="col-sm-12 col-md-6 col-lg-6 img-test">
              <img
                src={allContentfulTestDrive.nodes[0].imgPlanOne.file.url}
                alt="img-1"
              />
              <button className="btn btn-purple">Buy</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 img-test">
              <img
                src={allContentfulTestDrive.nodes[0].imgPlanTwo.file.url}
                alt="img-1"
              />
              <button className="btn btn-purple">Buy</button>
            </div>
          </div>
        </div>
      </section>
      <div className="section-padding-2">
        <Content
          pOne={allContentfulContentArea.nodes[2].textPointsOne}
          pTwo={allContentfulContentArea.nodes[2].textPointsTwo}
          pThree={allContentfulContentArea.nodes[2].textPointThree}
          Heading={allContentfulContentArea.nodes[2].textMainHeading}
          sideOne={allContentfulContentArea.nodes[2].textMainOne}
          sideTwo={allContentfulContentArea.nodes[2].textMainTwo}
          smallOne={allContentfulContentArea.nodes[2].textSideOne}
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
      <section className="xiir-benefits">
        <div className="container">
          <div className="div-head">
            <h3 className="ser-head-2">
              {allContentfulTestDrive.nodes[0].title}
            </h3>
          </div>
          <br />
          <div className="div-para">
            <h4>{allContentfulTestDrive.nodes[0].description}</h4>
          </div>
        </div>
      </section>

      <section className="xiir-benefits">
        <div className="container">
          <div className="div-head">
            <h3 className="ser-head-2">
              {allContentfulTestDrive.nodes[0].subTitle}
            </h3>
          </div>
          <br />
          <div className="div-para">
            <h4>{allContentfulTestDrive.nodes[0].subDescription}</h4>
          </div>
        </div>
      </section>
      <div className="text-center ser-img-2">
        <img src={allContentfulTestDrive.nodes[0].image.file.url} alt="ser-2" />
      </div>
      <section className="download-box section-padding">
        <div className="container">
          <div className="our-media">
            <h1>{allContentfulTestDrive.nodes[0].subText}</h1>
          </div>
          <div className="box ">
            <div className=" datasheet-down">
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input
                    placeholder="your full name"
                    value={name}
                    type="text"
                    name="user_name"
                    style={{ marginBottom: "10px" }}
                    onChange={e => setName(e.currentTarget.value)}
                  />
                  <input
                    placeholder="please enter a valid business email"
                    value={email}
                    type="email"
                    name="user_email"
                    style={{ marginBottom: "10px" }}
                    onChange={e => setEmail(e.currentTarget.value)}
                  />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn btn-purple">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TestDrive

export const qurey = graphql`
  query {
    allContentfulTestDrive {
      nodes {
        title
        subTitle
        subText
        subDescription
        description
        imgPlanTwo {
          file {
            url
          }
        }
        imgPlanOne {
          file {
            url
          }
        }
        image {
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
