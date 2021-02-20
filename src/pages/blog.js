import React from "react"
import { Router } from '@reach/router'
import AllBlogs from '../blog/AllBlog'
import BlogDisplay from '../blog/BlogDisplay'
const Blog = () => {
  return (
    <Router basepath='/blog'>
      <AllBlogs path='/' />
      <BlogDisplay path="/:title" />
    </Router>
  )
}

export default Blog
