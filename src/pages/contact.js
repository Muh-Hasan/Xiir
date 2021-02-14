import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import { graphql } from "gatsby"
const Contact = ({ data }) => {
  const { allContentfulContactPage } = data

  return (
    <div>
      <Header />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 contact-tagline">
              <h3>contact</h3>

              <div>
                <h2>{allContentfulContactPage.nodes[0].tagline}</h2>
              </div>
              <div className="row contact-info">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].phoneIcon.file.url}
                  />
                  <h5>{allContentfulContactPage.nodes[0].dublinOfficeNum}</h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].phoneIcon.file.url}
                  />
                  <h5>{allContentfulContactPage.nodes[0].headQuartersNum}</h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].emailIcon.file.url}
                  />
                  <h5>{allContentfulContactPage.nodes[0].email}</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contct-form-area">
              <div>
                <div className="form-group">
                  <label className="sr-only">Full name</label>
                  <input placeholder="FULL NAME" />
                </div>
                <div className="form-group">
                  <label className="sr-only">Full name</label>
                  <input placeholder="FULL NAME" />
                </div>
                <div className="form-group">
                  <label className="sr-only">Full name</label>
                  <textarea placeholder="FULL NAME" />
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

export default Contact

export const query = graphql`
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
      }
    }
  }
`
