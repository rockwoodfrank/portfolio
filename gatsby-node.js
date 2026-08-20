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
}