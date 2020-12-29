import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const PageTemplate = ({ data }) => {
  const {
    html: pageBody,
    frontmatter: { title: pageTitle },
  } = data.markdownRemark
  return (
    <Layout title={pageTitle}>
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        layout
      }
    }
  }
`

export default PageTemplate
