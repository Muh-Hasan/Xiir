import React from "react"
// Components
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import Content from "../components/Content"
// Data
import simplifyOversight from "../assets/data/simplifyOversight"
// Iamges
import Img from "../assets/images/3.jpg"
import Analytics from "../assets/images/analytics.png"
import Case from "../assets/images/case.png"
import Like from "../assets/images/like.png"
import Another from "../assets/images/anotherImg.jpg"
// import Idea from "../assets/images/Idea.jpg"
// libs
import ReactPlayer from "react-player/youtube"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Home = ({ data }) => {
  const {
    allContentfulLandingPageMain,
    allContentfulSimplifyYourOversight,
    allContentfulToggleWithImagesSimplifyYourOversight,
    allContentfulWhyYouShouldTestDriveXiir,
  } = data

  return (
    <div>
      <Header />
      <section className="banner-section container ">
        <div className="img-col">
          <img
            src={allContentfulLandingPageMain.nodes[0].image.file.url}
            alt="nothing"
            className="img"
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-5 text-col">
            <h3>{allContentfulLandingPageMain.nodes[0].sideHeading}</h3>
            <h1>{allContentfulLandingPageMain.nodes[0].mainHeading}</h1>
            <div className="btn-div">
              <Button
                text={allContentfulLandingPageMain.nodes[0].buttonText}
                className="btn-purple"
              />
            </div>
          </div>
        </div>
      </section>

      <Content />

      <section className="d-flex section-padding-2">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className="col-sm-12 col-md-5 col-lg-5 text-col">
              <h1>{allContentfulSimplifyYourOversight.nodes[0].heading}</h1>
              <br />
              <h3>
                {documentToReactComponents(
                  JSON.parse(
                    allContentfulSimplifyYourOversight.nodes[0].descriptionOne
                      .raw
                  )
                )}
              </h3>
              <h3>
                {documentToReactComponents(
                  JSON.parse(
                    allContentfulSimplifyYourOversight.nodes[0].descriptionTwo
                      .raw
                  )
                )}
              </h3>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 img-col">
              <img src={Another} alt="nothing" className="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>
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
          <div className="btn-accod-div">
            <Button text="explore more" className="btn-purple" />
          </div>
        </div>
      </section>

      <section className="xiir-benefits">
        <div className="container">
          <div className="div-head">
            <h1>{allContentfulWhyYouShouldTestDriveXiir.nodes[0].title}</h1>
          </div>
          <br />
          <div className="div-para">
            <h4>
              {documentToReactComponents(
                JSON.parse(
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0].description
                    .raw
                )
              )}
            </h4>
          </div>
        </div>
      </section>

      <section className=" info-boxes">
        <div className="container">
          <div className="d-flex info-boxes-div">
            <div>
              <img src={Case} alt="Case" />
              <h4>{allContentfulWhyYouShouldTestDriveXiir.nodes[0]}</h4>
              <p>Simplify oversight and control for all your projects</p>
            </div>
            <div>
              <img src={Analytics} alt="Analytics" />
              <h4>Supercharge Governance</h4>
              <p>Communicate to the right people at the right time</p>
            </div>
            <div>
              <img src={Like} alt="Like" />
              <h4>Informed Decision-making</h4>
              <p> Bring all relevant insights to your fingertips</p>
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
                  <Accordion
                    title="Real-time Visibility"
                    content="Simplify oversights and control for all your projects"
                  />
                  <Accordion
                    title="Supercharge Governance"
                    content="Communicate to the right people at the right time"
                  />

                  <Accordion
                    title="Supercharge Governance"
                    content="Communicate to the right people at the right time"
                  />

                  <Accordion
                    title="Informed Decision-making"
                    content="Bring all relevant insights to your fingertips"
                  />
                  <Accordion
                    title="What is your return policy?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                  <Accordion
                    title="How do I track my order?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                  <Accordion
                    title="Can I purchase items again?"
                    content="
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-box section-padding">
        <div className="container">
          <div className="our-media">
            <h1>some items for you</h1>
          </div>
          <div className="box ">
            <div className="down-heading">
              <h2>download the xiir datesheet</h2>
            </div>
            <div className=" datasheet-down">
              <div className="input">
                <input placeholder="please enter a valid business email" />
              </div>
              <br />
              <div>
                <a
                  href="https://docs.google.com/uc?export=download&id=118Nvc-kQcwznRaQKVFjcDQGOLNqhc4cy"
                  // download="datasheet.pdf"
                >
                  <Button text="download" className="btn-purple" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container youtube-channel">
          <div>
            <ReactPlayer
              width="100%"
              height="500px"
              url="https://www.youtube.com/watch?v=QvfQd8NkzMk"
            />
          </div>
        </div>
      </section>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Home

export const qurey = graphql`
  query {
    allContentfulLandingPageMain {
      nodes {
        buttonText
        sideHeading
        mainHeading
        image {
          file {
            url
          }
        }
      }
    }
    allContentfulSimplifyYourOversight {
      nodes {
        descriptionOne {
          raw
        }
        descriptionTwo {
          raw
        }
        heading
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
    allContentfulWhyYouShouldTestDriveXiir {
      nodes {
        boxOneDescription
        boxOneTilte
        boxOneTitle
        boxTwoDescription
        boxThreeTitle
        title
        description {
          raw
        }
        boxOneImg {
          file {
            url
          }
        }
        boxThreeDescription
        boxThreeImg {
          file {
            url
          }
        }
        boxTwoImg {
          file {
            url
          }
        }
      }
    }
  }
`
