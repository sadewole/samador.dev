import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Post } from "../components/Views"
import { SiteMetaData } from "../hooks"

const BlogTemplate = ({ data }) => {
  const { title: siteTitle } = SiteMetaData()
  const { title: postTitle } = data.markdownRemark.frontmatter
  return (
    <Layout title={`${postTitle} - ${siteTitle}`}>
      <Post post={data.markdownRemark} />
    </Layout>
  )
}

export const query = graphql`
  query BlogBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
    }
  }
`

export default BlogTemplate
