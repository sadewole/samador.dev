import React from "react"
import Layout from "../components/Layout"
import { Page } from "../components/Views"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Page title="404: Not found">
      <p data-testid="subtitle">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Page>
  </Layout>
)

export default NotFoundPage
