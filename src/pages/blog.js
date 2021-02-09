import React from 'react'
import { graphql } from 'gatsby'
const Blog = ({ data }) => {
    console.log(data);
    return (
        <div>
           <h1>this is blog page</h1> 
        </div>
    )
}

export default Blog

export const qurey = graphql`
query{
  allContentfulFoconor {
    nodes {
      description {
        raw
      }
      date
      title
      image {
        file {
          url
        }
      }
    }
  }
}
`