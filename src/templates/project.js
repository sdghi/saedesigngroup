import React from "react"
import Layout from "../components/layout"

const Project = ({ pageContext }) => {
  console.log("context", pageContext)

  return (
    <Layout>
      <div>this is a project</div>
    </Layout>
  )
}

export default Project
