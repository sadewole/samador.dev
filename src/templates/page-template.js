import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Page } from "../components/Views"

const PageTemplate = ({ data }) => {
  const {
    html: pageBody,
    frontmatter: { title: pageTitle },
  } = data.markdownRemark
  return (
    <Layout title={pageTitle}>
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
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
