import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Feeds from "../components/Feeds"

const AllBlogTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Blogs">
      {posts.length === 0 ? (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      ) : (
        <Feeds posts={posts} />
      )}
    </Layout>
  )
}

export const BlogsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "blog" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
      totalCount
    }
  }
`

export default AllBlogTemplate
