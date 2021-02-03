import React from "react"
import Header from "../components/Header"
import Accordion from "../components/Accordion/Accordion"
// import Footer from '../components/Footer/Footer'
import Footer from "../components/Footer/Footer"
import Button from "../components/Button"
import Content from "../components/Content"
// Iamges
import Img from "../images/3.jpg"
import Analytics from "../images/analytics.png"
import Case from "../images/case.png"
import Like from "../images/like.png"

const Home = () => {
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
                <Button text="schedule a 5 minute demo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Content />

      <section className="d-flex">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className="col-sm-12 col-md-5 col-lg-5 text-col">
              <h1>simplify compliance oversight</h1>
              <br />
              <h3>
                at the heart of xiir is the understanding that managing
                compliance is one of the many things senior mangers do
              </h3>
              <h3>and that's why it needs to be made easy for them</h3>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 img-col">
              <img src={Img} alt="nothing" className="img" />
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
          <div className="btn-accod-div">
            <Button text="explore more" />
          </div>
        </div>
      </section>

      <section className="xiir-benefits">
        <div className="container">
          <div className="div-head">
            <h1>How Xiir Benefits You</h1>
          </div>
          <div className="div-para">
            <h4>
              Customised compliance frameworks across the business delivering
              your oversight easier, faster and more reliable with better
              accountability, transparency and outcomes.
            </h4>
          </div>
        </div>
      </section>

      <section className="info-boxes">
        <div className="container">
          <div className="d-flex info-boxes-div">
            <div>
              <img src={Case} alt="Case" />
              <h4>Real-time Visibility</h4>
              <p>Simplify control for all your compliance oversight</p>
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

      <section className="d-flex">
        <div className="container">
          <div>
            <h1>frequently asked questions</h1>
          </div>
          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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

      <section className="download-box">
        <div className="container">
          <div className="box">
            <h2>download the xiir datesheet</h2>
            <div>
              <div>
                <input placeholder="please enter a valid business email" />
              </div>
              <div>
                <button>download</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>our youtube channel has more videos</h2>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/watch?v=QvfQd8NkzMk"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
