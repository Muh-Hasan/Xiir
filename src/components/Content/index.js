import React from "react"

const Content = ({
  pOne,
  pTwo,
  pThree,
  Heading,
  sideOne,
  sideTwo,
  smallOne,
}) => {
  return (
    <>
      <section className="atelier-options change-header tr-bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  content-lines">
              <h1>{sideOne}</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-lines">
              <h3>{smallOne}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-option2 change-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  content-lines">
              <h1 className="h1-one">{Heading}</h1>
              <br />
              <h1 className="h1-two">{sideTwo}</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-lines">
              <h3 className="h3-one">{pOne}</h3>
              <h3 className="h3-one">{pTwo}</h3>
              <h3 className="h3-one">{pThree}</h3>
            </div>
            <br />
          </div>
        </div>
      </section>
    </>
  )
}

export default Content

// export const qurey = graphql`
//   query {

//   }
// `
