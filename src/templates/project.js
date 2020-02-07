import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Project = ({ pageContext }) => {
  const { next, previous } = pageContext
  const { project_name: nextName } = next.data
  const { project_name: prevName } = previous.data

  return (
    <Layout>
      <div>this is a project</div>
      <h3>previous</h3>
      <Link to={`/${previous.uid}`}>{prevName.text}</Link>
      <h3>next</h3>
      <Link to={`/${next.uid}`}>{nextName.text}</Link>
    </Layout>
  )
}

export default Project
