import React from "react"
import { useParams } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"
import Header from "../components/Header"
import Footer from "../components/Footer/Footer"
const BlogDisplay = ({ location }) => {
  const params = useParams()
  const urlPath = params.title
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        nodes {
          blogDetail {
            raw
            references {
              file {
                url
              }
            }
          }
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
  const filter = data.allContentfulBlog.nodes[urlPath]
  console.log(filter)
  return (
    <div>
      <Header />
      <div className="container blog-display section-padding-blog">
        <div className="row justify-content-center container">
          <div className="blog-show">
            <div className="text-center">
              <img src={filter.img.file.url} alt="0ne" />
            </div>
            <div>
              <h2>{filter.title}</h2>
            </div>
            <div>
              <p>
                {documentToReactComponents(JSON.parse(filter.blogDetail.raw))}
              </p>
            </div>
            <div>
              <img src={filter.blogDetail.references[0]?.file.url} />
            </div>
          </div>
        </div>
        <div className="container row justify-content-center">
          <div className="container row icons-share ">
            <div>
              <h4>SHARE</h4>
            </div>
            <div>
              <TwitterShareButton
                url={`${location.origin}/blog/${urlPath}`}
                color="none"
              >
                <TwitterIcon size={30} />
              </TwitterShareButton>
            </div>
            <div>
              <LinkedinShareButton url={`${location.origin}/blog/${urlPath}`}>
                <LinkedinIcon size={30} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDisplay
