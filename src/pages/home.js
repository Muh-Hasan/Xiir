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
import AccOne from "../images/imageAccOne.png"
import AccTwo from "../images/imageAccTwo.jpg"
import AccThree from "../images/imageAccThree.png"
import Like from "../images/like.png"
import Another from '../images/anotherImg.jpg'
import ReactPlayer from "react-player/youtube"

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
              <h1>Xiir Frameworks Drives Oversight In The Fastlane</h1>
              <div className="btn-div">
                <Button text="GET AN INSTANT TEST DRIVE" className='btn-purple' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Content />

      <section className="d-flex section-padding">
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between content-area">
            <div className="col-sm-12 col-md-5 col-lg-5 text-col">
              <h1>simplify your oversight</h1>
              <br />
              <h3>
                at the heart of xiir is the understanding that managing
                compliance is one of the many things senior mangers do
              </h3>
              <h3>and that's why it needs to be made easy for them</h3>
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
                  <Accordion
                    title="custom frameworks"
                    content="Aggregate, automate and manage all your projects that oversight matters."
                    img={AccOne}
                  />
                  <Accordion
                    title="seamless governace"
                    content="Streamline your insights to who when it matters with a single click action."
                    img={AccTwo}
                  />
                  <Accordion
                    title="smart controls"
                    content="Your intelligent dashborad that superpowers descision-making."
                    img={AccThree}
                  />
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
            <h1>why you should test drive Xiir</h1>
          </div>
          <div className="div-para">
            <h4>
              Customised frameworks across the business delivering
              oversight of your projects  easier, faster and more reliable with better
              accountability, transparency and outcomes.
            </h4>
          </div>
        </div>
      </section>

      <section className="section-padding info-boxes">
        <div className="container">
          <div className="d-flex info-boxes-div">
            <div>
              <img src={Case} alt="Case" />
              <h4>Real-time Visibility</h4>
              <p>Simplify oversights and control for all your projects</p>
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
                    content="Simplify oversights and control for all your projects"/>
                  <Accordion
                    title="Supercharge Governance"
                    content="Communicate to the right people at the right time"/>
                  
                  <Accordion
                    title="Supercharge Governance"
                    content="Communicate to the right people at the right time"/>
                  
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
              <div>
                <Button text="download" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container youtube-channel">
          {/* <div style={{ marginBottom: "20px" }}>
            <h2>our youtube channel has more videos</h2>
          </div> */}
          <div>
            <ReactPlayer
              width="100%"
              height="500px"
              url="https://www.youtube.com/watch?v=QvfQd8NkzMk"
            />
          </div>
        </div>
      </section>

      <div className="section-padding">
        <Footer />
      </div>
    </div>
  )
}

export default Home
