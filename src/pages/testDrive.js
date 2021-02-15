import React from "react"
import { graphql } from "gatsby"
import Content from "../components/Content"
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"

const TestDrive = ({ data }) => {
  const {
    allContentfulToggleWithImagesSimplifyYourOversight,
    allContentfulContentArea,
    allContentfulTestDriveLanding,
  } = data
  return (
    <div>
      <Header />

      <section className="banner-section d-flex">
        <div className="container  d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className=" col-sm-12 col-md-6 col-lg-6 img-test">
              <img
                src={allContentfulTestDriveLanding.nodes[0].image.file.url}
                alt="nothing"
                className="img"
              />
            </div>
            <div className=" col-sm-12 col-md-5 col-lg-5 text-col">
              <h1>{allContentfulTestDriveLanding.nodes[0].title}</h1>
              <h3>{allContentfulTestDriveLanding.nodes[0].description}</h3>
              <div className="btn-div">
                <Button
                  text={allContentfulTestDriveLanding.nodes[0].buttonText}
                  className="btn-purple"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Content
        pOne={allContentfulContentArea.nodes[0].textPointsOne}
        pTwo={allContentfulContentArea.nodes[0].textPointsTwo}
        pThree={allContentfulContentArea.nodes[0].textPointThree}
        Heading={allContentfulContentArea.nodes[0].textMainHeading}
        sideOne={allContentfulContentArea.nodes[0].textMainOne}
        sideTwo={allContentfulContentArea.nodes[0].textMainTwo}
        smallOne={allContentfulContentArea.nodes[0].textSideOne}
      />

      <section className="section-padding-4">
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
      <div className="text-center section-padding">
        <Button text="let's talk" className="btn-purple" />
      </div>
      <Footer />
    </div>
  )
}

export default TestDrive

export const qurey = graphql`
  query {
    allContentfulTestDriveLanding {
      nodes {
        title
        description
        buttonText
        image {
          file {
            url
          }
        }
      }
    }

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
  }
`
