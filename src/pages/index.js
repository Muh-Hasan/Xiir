import React from "react"
// Components
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import Content from "../components/Content"
// Iamges
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
    allContentfulFrequentlyAskedQuestions,
    allContentfulContentArea,
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

      <Content
        pOne={allContentfulContentArea.nodes[0].textPointsOne}
        pTwo={allContentfulContentArea.nodes[0].textPointsTwo}
        pThree={allContentfulContentArea.nodes[0].textPointThree}
        Heading={allContentfulContentArea.nodes[0].textMainHeading}
        sideOne={allContentfulContentArea.nodes[0].textMainOne}
        sideTwo={allContentfulContentArea.nodes[0].textMainTwo}
        smallOne={allContentfulContentArea.nodes[0].textSideOne}
      />

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
              <img
                src={allContentfulSimplifyYourOversight.nodes[0].image.file.url}
                alt="nothing"
                className="img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
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
              <img
                src={
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxOneImg.file
                    .url
                }
                alt="Case"
              />
              <h4>
                {allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxOneTitle}
              </h4>
              <p>
                {
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0]
                    .boxOneDescription
                }
              </p>
            </div>
            <div>
              <img
                src={
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxTwoImg.file
                    .url
                }
                alt="Analytics"
              />
              <h4>
                {allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxTwoTitle}
              </h4>
              <p>
                {
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0]
                    .boxTwoDescription
                }
              </p>
            </div>
            <div>
              <img
                src={
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxThreeImg
                    .file.url
                }
                alt="Like"
              />
              <h4>
                {allContentfulWhyYouShouldTestDriveXiir.nodes[0].boxThreeTitle}
              </h4>
              <p>
                {
                  allContentfulWhyYouShouldTestDriveXiir.nodes[0]
                    .boxThreeDescription
                }
              </p>
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
                <a href="https://docs.google.com/uc?export=download&id=118Nvc-kQcwznRaQKVFjcDQGOLNqhc4cy">
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
        boxOneTitle
        boxTwoTitle
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
