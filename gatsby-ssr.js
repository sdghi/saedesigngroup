import React from "react"
import Provider from "./src/provider"
import Layout from "./src/components/layout"

export const wrapRootElement = Provider

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
