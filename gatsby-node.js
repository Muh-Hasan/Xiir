const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
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
  `)
  result.data.allContentfulBlogPosts.edges.forEach(item => {
    createPage({
      path: `/blogs/${item.node.title}`,
      component: path.resolve("./src/temp/index.js"),
      context: {
        data: item.node,
      },
    })
  })
}