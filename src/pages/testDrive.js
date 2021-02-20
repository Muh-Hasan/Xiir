import React from "react"
import { graphql } from "gatsby"
import Content from "../components/Content"
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TestDrive = ({ data }) => {
  const { allContentfulTestDrive, allContentfulFrequentlyAskedQuestions } = data
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
        <div className='container '>
          <div className='d-flex '>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <img src={allContentfulTestDrive.nodes[0].imgPlanOne.file.url} alt='img-1' />
            <button>Buy</button>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
            <img src={allContentfulTestDrive.nodes[0].imgPlanTwo.file.url} alt='img-1' />
            <button>Buy</button>
          </div>
          </div>
        </div>
      </section>
      <section className="section-padding d-flex">
        <div className="container">
          <div className="faq">
            <h1>frequently asked questions</h1>
          </div>
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>
                  {allContentfulFrequentlyAskedQuestions.nodes
                    .slice(0)
                    .reverse()
                    .map((v, i) => (
                      <Accordion
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
        <img
          src={allContentfulTestDrive.nodes[0].image.file.url}
          alt="ser-2"
        />
      </div>
      <section className="download-box section-padding">
        <div className="container">
        <div className="our-media">
            <h1>{allContentfulTestDrive.nodes[0].subText}</h1>
          </div>
          <div className="box ">
            <div className=" datasheet-down">
              <div className="input">
                <input placeholder="your full name" />
                <input placeholder="please enter a valid business email" />
              </div>
              <br />
              <div>
                  <Button text="submit" className="btn-purple" />
              </div>
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
