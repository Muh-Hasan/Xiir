import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import { graphql } from "gatsby"
import Button from "../components/Button"
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
              <div>
                <iframe src="https://www.google.com/maps/place/6-9+Trinity+St,+Dublin+2,+D02+EY47,+Ireland/@53.3438138,-6.264074,17z/data=!3m1!4b1!4m5!3m4!1s0x48670e9c976bdf29:0xc9c453110f555484!8m2!3d53.3438106!4d-6.2618853"></iframe>
              </div>
              <div className="row contact-info">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].phoneIcon.file.url}
                    alt={allContentfulContactPage.nodes[0].dublinOfficeNum}
                  />
                  <h5>{allContentfulContactPage.nodes[0].dublinOfficeNum}</h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].phoneIcon.file.url}
                    alt={allContentfulContactPage.nodes[0].headQuartersNum}
                  />
                  <h5>{allContentfulContactPage.nodes[0].headQuartersNum}</h5>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 row align-items-center">
                  <img
                    src={allContentfulContactPage.nodes[0].emailIcon.file.url}
                    alt={allContentfulContactPage.nodes[0].tagline}
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
                <Button text="submit" className="btn-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
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
