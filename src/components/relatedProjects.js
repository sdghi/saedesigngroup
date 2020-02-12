import React from "react"
import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"

const RelatedProjects = ({ next, previous, doubleNext }) => {
  const { project_name: nextName } = next.data
  const { project_name: prevName } = previous.data
  const { project_name: doubleNextName } = doubleNext.data

  const {
    src: prevImage,
  } = previous.data.featured_image.localFile.childImageSharp.fluid

  const {
    src: nextImage,
  } = next.data.featured_image.localFile.childImageSharp.fluid

  const {
    src: doubleNextImage,
  } = doubleNext.data.featured_image.localFile.childImageSharp.fluid

  return (
    <RelatedWrapper>
      <Link to={`/${previous.uid}`}>
        <img src={prevImage} alt={prevName.text} />
        <p>{prevName.text}</p>
      </Link>
      <Link to={`/${next.uid}`}>
        <img src={nextImage} alt={nextName.text} />
        <p>{nextName.text}</p>
      </Link>
      <Link to={`/${doubleNext.uid}`}>
        <img src={doubleNextImage} alt={doubleNextName.text} />
        <p>{doubleNextName.text}</p>
      </Link>
    </RelatedWrapper>
  )
}

export default RelatedProjects

const RelatedWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  img {
    height: 330px;
    object-fit: cover;
    width: 100%;
  }
`
