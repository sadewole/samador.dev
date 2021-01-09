const path = require("path")
const siteConfig = require("../../config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "blog" } } }) {
        totalCount
      }
    }
  `)

  const { postsPerPage } = siteConfig
  const numPages = Math.ceil(
    result.data.allMarkdownRemark.totalCount / postsPerPage
  )

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? "/blogs" : `/blogs/${i}`,
      component: path.resolve("./src/templates/all-blog-template.js"),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? "/blogs" : `/blogs/${i - 1}`,
        nextPagePath: `/blogs/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    })
  }
}
