import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HeadingTwo } from "../../elements"
import { breakpointSmall, black } from "../../variables"
import { useCursorChange } from '../../hooks'

const RelatedProjects = ({ next, previous, doubleNext }) => {
  const { project_name: nextName } = next.data
  const { project_name: prevName } = previous.data
  const { project_name: doubleNextName } = doubleNext.data

  // const { setCursorElement } = useAppContext()
  const [bindPrev] = useCursorChange({ related: prevName.text })
  const [bindNext] = useCursorChange({ related: nextName.text })
  const [bindDoubleNext] = useCursorChange({ related: doubleNextName.text })

  const prevImage = previous.data.featured_image.url;
  const nextImage = next.data.featured_image.url;
  const doubleNextImage = doubleNext.data.featured_image.url;

  return (
    <div>
      <HeadingTwo
        fontSize="20px"
        textAlign="center"
        bottom="35px"
        css="text-transform: uppercase"
      >
        More Stuff
      </HeadingTwo>
      <RelatedWrapper>
        <Link
          to={`/${previous.uid}`}
          {...bindPrev}
        >
          <img src={prevImage} alt={prevName.text} />
          <p>{prevName.text}</p>
        </Link>
        <Link
          to={`/${next.uid}`}
          {...bindNext}
        >
          <img src={nextImage} alt={nextName.text} />
          <p>{nextName.text}</p>
        </Link>
        <Link
          to={`/${doubleNext.uid}`}
          {...bindDoubleNext}
        >
          <img src={doubleNextImage} alt={doubleNextName.text} />
          <p>{doubleNextName.text}</p>
        </Link>
      </RelatedWrapper>
    </div>
  )
}

export default RelatedProjects

const RelatedWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 50px;

  a {
    margin-right: 30px;
  }

  img {
    height: 280px;
    object-fit: cover;
    width: 280px;
    filter: brightness(0.95);
  }

  p{
    text-transform: uppercase;
    color: ${black};
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: ${breakpointSmall}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-bottom: 0;

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
