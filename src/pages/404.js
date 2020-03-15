import React from "react"
import TransitionWrapper from '../components/wrappers/transitionWrapper'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <TransitionWrapper>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </TransitionWrapper>
  </Layout>
)

export default NotFoundPage
