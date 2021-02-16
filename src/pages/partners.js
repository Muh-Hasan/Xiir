import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Content from "../components/Content"
import Header from "../components/Header"
import AccordionGreen from "../components/AccordionGreen"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"

const Partners = ({ data }) => {
  const {
    allContentfulContentArea,
    allContentfulContactPage,
    allContentfulFrequentlyAskedQuestions,
  } = data
  return (
    <div>
      <Header />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 contact-tagline">
              <h3>partners</h3>
              <div>
                <h2>{allContentfulContactPage.nodes[0].tagline}</h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contct-form-area">
              <div>
                <div className="form-group">
                  <label className="sr-only">Full name</label>
                  <input placeholder="FULL NAME" />
                </div>
                <div className="form-group">
                  <label className="sr-only">Email</label>
                  <input placeholder="FULL NAME" />
                </div>
                <div className="form-group">
                  <label className="sr-only">Message</label>
                  <textarea placeholder="FULL NAME" />
                </div>
                <Button text="submit" className="btn-purple" />
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
          pOne={allContentfulContentArea.nodes[0].textPointsOne}
          pTwo={allContentfulContentArea.nodes[0].textPointsTwo}
          pThree={allContentfulContentArea.nodes[0].textPointThree}
          Heading={allContentfulContentArea.nodes[0].textMainHeading}
          sideOne={allContentfulContentArea.nodes[0].textMainOne}
          sideTwo={allContentfulContentArea.nodes[0].textMainTwo}
          smallOne={allContentfulContentArea.nodes[0].textSideOne}
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
                    .slice(0)
                    .reverse()
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
