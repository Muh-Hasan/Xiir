import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"

const AllBlogs = ({ location }) => {
  const [filterData, setFilterData] = useState([])
  const [optionVal, setOptionVal] = useState("All")
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        nodes {
          blogSummary
          title
          img {
            file {
              url
            }
          }
        }
      }
      allContentfulAllBlogs {
        nodes {
          title
          description
        }
      }
    }
  `)
  const { allContentfulBlog, allContentfulAllBlogs } = data
  useEffect(() => {
    if (optionVal === "All") {
      setFilterData(allContentfulBlog.nodes)
    } else if (optionVal === "Blogs") {
      setFilterData(
        allContentfulBlog.nodes.filter(
          v => v.title === "Xiir exhibits at Collision 2020 Conference "
        )
      )
    }
  }, [optionVal])
  console.log(filterData)
 
  return (
    <div>
      <Header />
      <section className="section-padding-blog">
        <div className="container">
          <div className="row justify-content-center container">
            <div className="col-sm-12 col-md-6 col-lg-6 contact-tagline">
              <h3 className="headings-of-all">
                {allContentfulAllBlogs.nodes[0].title}
              </h3>
              <div style={{ marginBottom: "20px" }}>
                <h2 style={{ color: "#243671" }}>
                  {allContentfulAllBlogs.nodes[0].description}
                </h2>
              </div>
            </div>


            
            <button onClick={() => setOptionVal("All")}>All</button>
            <button onClick={() => setOptionVal("News")}>News</button>
            <button onClick={() => setOptionVal("Blogs")}>Blogs</button>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center container">
            {filterData?.map((v, i) => (
              <Link to={`/blog/${i}`} key={i}>
                <Card
                  img={v.img.file.url}
                  title={v.title}
                  description={v.blogSummary}
                  href={`${location.origin}/blog/${i}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AllBlogs
