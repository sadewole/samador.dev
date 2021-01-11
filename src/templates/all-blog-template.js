import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Page } from "../components/Views"
import Feeds from "../components/Feeds"
import Pagination from "../components/Pagination"

const AllBlogTemplate = ({ data, pageContext }) => {
  const { nodes: posts, totalCount } = data.allMarkdownRemark

  return (
    <Layout title="Blogs">
      <Page title="Blogs">
        {posts.length === 0 ? (
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        ) : (
          <Fragment>
            <Feeds posts={posts} />
            {totalCount > 4 && <Pagination {...pageContext} />}
          </Fragment>
        )}
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query BlogTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
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
