const path = require(`path`)
const createBlogs = require("./pagination/create-blogs")

const createPages = async ({ graphql, actions, reporter }) => {
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
      createPage({
        path: `/blogs/${node.frontmatter.slug}`,
        component: path.resolve("./src/templates/blog-template.js"),
        context: { slug: node.frontmatter.slug },
      })
    }
  })

  await createBlogs(graphql, actions)
}

module.exports = createPages
