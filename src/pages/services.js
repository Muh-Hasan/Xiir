import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Services = ({ data }) => {
  const {
    allContentfulToggleWithImagesSimplifyYourOversight,
    allContentfulServices,
  } = data

  return (
    <div>
      <Header />

      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 contact-tagline">
              <h3 className="headings-of-all">Services</h3>
              <div>
                <h2>
                  {documentToReactComponents(
                    JSON.parse(allContentfulServices.nodes[0].description.raw)
                  )}
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 img-col ">
              <img
                className="img"
                src={allContentfulServices.nodes[0].image.file.url}
                alt="ser-1"
              />
              <Button text="test drive" className="btn-purple" />
            </div>
          </div>
        </div>
      </section>
      <section className="ser-acc-padding">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {allContentfulToggleWithImagesSimplifyYourOversight.nodes.map(
                  (v, i) => (
                    <Accordion
                      title={v.tittle}
                      content={v.title}
                      img={v.image.file.url}
                      key={i}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ser-slider">
        <marquee>
          {documentToReactComponents(
            JSON.parse(allContentfulServices.nodes[0].sliderText.raw)
          )}
        </marquee>
      </div>

      <section className="xiir-benefits">
        <div className="container">
          <div className="div-head">
            <h1>{allContentfulServices.nodes[0].titleOne}</h1>
            <h3 className="ser-head-2">
              {allContentfulServices.nodes[0].sideTitle}
            </h3>
          </div>
          <br />
          <div className="div-para">
            <h4>{allContentfulServices.nodes[0].descriptionPlans}</h4>
          </div>
        </div>
      </section>

      <div className="text-center ser-img-2">
        <img
          src={allContentfulServices.nodes[0].imagePlan.file.url}
          alt="ser-2"
        />
      </div>
      <div className="container ser-padding-btn">
        <Link to="/testDrive">
          <Button text="let's arrange a demo" className="btn-purple" />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Services

export const qurey = graphql`
  query {
    allContentfulToggleWithImagesSimplifyYourOversight {
      nodes {
        tittle
        image {
          file {
            url
          }
        }
        title
      }
    }
    allContentfulServices {
      nodes {
        sliderText {
          raw
        }
        sideTitle
        imagePlan {
          file {
            url
          }
          title
        }
        description {
          raw
        }
        descriptionPlans
        image {
          file {
            url
          }
        }
        titleOne
      }
    }
  }
`
