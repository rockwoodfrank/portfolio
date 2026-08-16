// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            date
            tags
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.id}`,
      component: `${node.internal.contentFilePath}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
      },
    })
  })
}