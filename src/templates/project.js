import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-plugin-transition-link"

const Project = ({ pageContext }) => {
  const { next, previous } = pageContext
  const { project_name: nextName } = next.data
  const { project_name: prevName } = previous.data
  const {
    src: prevImage,
  } = previous.data.featured_image.localFile.childImageSharp.fixed
  const {
    src: nextImage,
  } = next.data.featured_image.localFile.childImageSharp.fixed

  return (
    <Layout>
      <h1>project</h1>
      <h3>previous</h3>
      <Link to={`/${previous.uid}`}>
        <img src={prevImage} alt={prevName.text} />
        <p>{prevName.text}</p>
      </Link>
      <h3>next</h3>

      <Link to={`/${next.uid}`}>
        <img src={nextImage} alt={nextName.text} />
        <p>{nextName.text}</p>
      </Link>
    </Layout>
  )
}

export default Project
