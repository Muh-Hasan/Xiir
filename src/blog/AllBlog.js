import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"

const AllBlogs = ({ location }) => {
  
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
    }
  `)
  const { allContentfulBlog } = data

  return (
    <div>
      <Header />
      <section className="section-padding-blog">
        <div className="text-left container">
          <h1 className="headings-of-all">blog</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center container">
            {allContentfulBlog.nodes.map((v, i) => (
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
