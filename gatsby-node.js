const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
        allContentfulBlog {
            edges {
              node {
                blogDetail {
                  raw
                }
                img {
                  file {
                    url
                  }
                }
                title
              }
            }
          }
    }
  `)
  result.data.allContentfulBlog.edges.forEach(item => {
    createPage({
      path: `/blog/${item.node.title}`,
      component: path.resolve(`./src/blog/index.js`),
      context: {
        data: item.node,
      },
    })
  })
}
