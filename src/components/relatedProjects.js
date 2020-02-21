import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HeadingTwo } from "../elements"
import { breakpointSmall } from "../variables"
import { myContext } from "../provider"

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
    <myContext.Consumer>
      {context => (
        <div>
          <HeadingTwo fontSize="20px" textAlign="center" bottom="35px">
            More Stuff
          </HeadingTwo>
          <RelatedWrapper>
            <Link
              to={`/${previous.uid}`}
              onMouseEnter={() =>
                context.setCursorElement({ related: prevName.text })
              }
              onMouseLeave={() => {
                context.setCursorElement({ initial: "initial" })
              }}
            >
              <img src={prevImage} alt={prevName.text} />
              <p>{prevName.text}</p>
            </Link>
            <Link
              to={`/${next.uid}`}
              onMouseEnter={() =>
                context.setCursorElement({ related: nextName.text })
              }
              onMouseLeave={() => {
                context.setCursorElement({ initial: "initial" })
              }}
            >
              <img src={nextImage} alt={nextName.text} />
              <p>{nextName.text}</p>
            </Link>
            <Link
              to={`/${doubleNext.uid}`}
              onMouseEnter={() =>
                context.setCursorElement({ related: doubleNextName.text })
              }
              onMouseLeave={() => {
                context.setCursorElement({ initial: "initial" })
              }}
            >
              <img src={doubleNextImage} alt={doubleNextName.text} />
              <p>{doubleNextName.text}</p>
            </Link>
          </RelatedWrapper>
        </div>
      )}
    </myContext.Consumer>
  )
}

export default RelatedProjects

const RelatedWrapper = styled.div`
  display: flex;
  overflow-x: auto;

  a {
    margin-right: 30px;
  }

  img {
    height: 280px;
    object-fit: cover;
    width: 280px;
  }

  @media (min-width: ${breakpointSmall}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    a {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 330px;
    }

    p {
      display: none;
    }
  }
`
