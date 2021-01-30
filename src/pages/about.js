import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Accordion from "../components/Accordion/Accordion"
import Img from "../images/3.jpg"


const About = () => {
    return (
        <div>
            <Header />
            <section className="banner-section d-flex">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className="col-sm-12 col-md-6 col-lg-6 img-col">
              <img src={Img} alt="nothing" className="img" />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 text-col">
              <h3>
                Senior managers spend way too much time ensuring compliance
              </h3>
              <h1>Xiir Frameworks deliver oversight with a single click</h1>
              <div className="btn-div">
                <button className="btn">
                  <span>schedule a 5 minute demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-options change-header tr-bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  content-lines">
              <h1>
                Our senior managers deserve something that saves their time and
                mind space
              </h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-lines">
              <h3>
                Companies want compliance managed impeccably, but without their
                senior managers having to spend considerable effort on it.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-option2 change-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  content-lines">
              <h1 className="h1-one">Manual processes no longer work</h1>
              <br />
              <h1 className="h1-two">
                Emails are taking up way more time than you realise
              </h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-lines">
              <h3 className="h3-one">
                Not intuitive enough, especially when we consider working from
                home.
              </h3>
              <h3 className="h3-one">
                Counterproductive and frustrating: takes time away from actual
                tasks.
              </h3>
              <h3 className="h3-one">
                Senior managers need better tools to juggle between so many
                responsibilities.
              </h3>
            </div>
          </div>
        </div>
      </section>

        <section className="d-flex">
        <div className="container align-items-center text-center">
          <div>
            <h1>FAQ</h1>
          </div>
          <div>
            <Accordion
              title="What is your return policy?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="How do I track my order?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="How do I track my order?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="How do I track my order?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              title="How do I track my order?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
        <p>Lorem ipsum  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
            />
          </div>
        </div>
      </section>
        
            <Footer />
        </div>
    )
}

export default About
