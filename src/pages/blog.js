import React from "react"
import { graphql , Link } from "gatsby"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
const Blog = ({ data }) => {
  const { allContentfulBlog } = data
  return (
    <div>
      <Header />
      <section className="section-padding-blog">
        <div className="text-center">
          <h1 className="headings-of-all">blog</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center container">
            {allContentfulBlog.nodes.map((v, i) => (
              <Link to={`/blog/${v.title}`}>
                <Card
                  img={v.img.file.url}
                  title={v.title}
                  description={v.blogSummary}
                  key={i}
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

export default Blog
export const qurey = graphql`
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
`
