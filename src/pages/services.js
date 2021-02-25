import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "../components/Header"
import AccordionGreen from "../components/AccordionGreen"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import Content from "../components/Content"
const Services = ({ data }) => {
  const {
    allContentfulFrequentlyAskedQuestions,
    allContentfulServices,
    allContentfulContentArea,
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
              <Link to="/testDrive">
                <Button
                  text="get an instant test drive"
                  className="btn-purple"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="section-padding-2">
        <Content
          pOne={allContentfulContentArea.nodes[1].textPointsOne}
          pTwo={allContentfulContentArea.nodes[1].textPointsTwo}
          pThree={allContentfulContentArea.nodes[1].textPointThree}
          Heading={allContentfulContentArea.nodes[1].textMainHeading}
          sideOne={allContentfulContentArea.nodes[1].textMainOne}
          sideTwo={allContentfulContentArea.nodes[1].textMainTwo}
          smallOne={allContentfulContentArea.nodes[1].textSideOne}
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
            <h1 className="colorOrange">
              {allContentfulServices.nodes[0].titleOne}
            </h1>
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
        <Link to="/contact">
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
    allContentfulFrequentlyAskedQuestions {
      nodes {
        title
        description {
          raw
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
