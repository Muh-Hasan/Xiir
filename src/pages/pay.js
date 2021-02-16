import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Pay = ({ data }) => {
  const { allContentfulPayPage } = data
  return (
    <div>
      <Header />
      <section className="banner-section d-flex">
        <div className="container  d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className=" col-sm-12 col-md-5 col-lg-5 text-col">
              <h1 className="headings-of-all">Pay</h1>
              <h1>{allContentfulPayPage.nodes[0].title}</h1>
              <h3>
                {documentToReactComponents(
                  JSON.parse(allContentfulPayPage.nodes[0].description.raw)
                )}
              </h3>
              <div className="btn-div  pay-btn">
                <Link to="/contact">
                  <Button text="contact" className="btn-purple" />
                </Link>
              </div>
              <div className='pay-stripe'>
                <img
                  src={allContentfulPayPage.nodes[0].image.file.url}
                  alt="stripe"
                />
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6 contct-form-area">
              <div>
                <div className="form-group">
                  <label className="sr-only">Amount</label>
                  <input placeholder="Amount" />
                </div>
                <div className="d-flex pay-input-div container">
                  <input type="checkbox" className="checkbox" />
                  <p>
                    <span> I accept </span>
                    <span className="with-color">Terms of use</span>
                  </p>
                </div>
                <div className="footer-form">
                  <button type="submit">pay</button>
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

export default Pay

export const qurey = graphql`
  query {
    allContentfulPayPage {
      nodes {
        description {
          raw
        }
        title
        image {
          file {
            url
          }
        }
      }
    }
  }
`
