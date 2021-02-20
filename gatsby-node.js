const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlog {
        nodes {
          blogSummary
          title
          img {
            file {
              url
            }
          }
          blogDetail {
            raw
          }
        }
      }
    }
  `)
  result.data.allContentfulBlog.nodes.forEach(item => {
    console.log(item);
    createPage({
      path: `/blog/${item.title}`,
      component: path.resolve("./src/temp/index.js"),
      context: {
        data: item,
      },
    })
  })
}
