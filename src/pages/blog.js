import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card"
const Blog = ({ data }) => {
  const { allContentfulBlog } = data
  return (
    <div>
      <h1>this is blog page</h1>
      <div className="container">
        <div className="row justify-content-center container">
          {allContentfulBlog.nodes.map((v, i) => (
            <Card
              img={v.img.file.url}
              title={v.title}
              description={v.blogSummary}
              key={i}
            />
          ))}
        </div>
      </div>
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
