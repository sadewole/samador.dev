const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        nodes {
          frontmatter {
            slug
            layout
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading this page`, result.errors)
    return
  }

  const { nodes } = result.data.allMarkdownRemark

  nodes.forEach(node => {
    if (node.frontmatter.layout === "page") {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve("./src/templates/page-template.js"),
        context: { slug: node.frontmatter.slug },
      })
    } else if (node.frontmatter.layout === "blog") {
      // createPage({
      //   path: node.frontmatter.slug,
      //   component: path.resolve("./src/templates/blog-template.js"),
      //   context: { slug: node.frontmatter.slug },
      // })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    if (typeof node.frontmatter.slug !== "undefined") {
      const dirname = getNode(node.parent).relativeDirectory
      createNodeField({
        node,
        name: "slug",
        value: `/${dirname}/${node.frontmatter.slug}`,
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: "slug",
        value,
      })
    }
  }
}
