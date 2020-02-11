import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { Container } from "../elements"
import { breakpointSmall } from "../variables"

const LargeImage = ({ slice }) => {
  const { image, caption } = slice.primary

  return (
    <Container padding="0 5%">
      <ImageContainer
        fluid={image.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={image.alt}
        stlye={{ width: "90vw", height: "500px" }}
      />

      {caption && <p>{caption.text}</p>}
    </Container>
  )
}

export default LargeImage

const ImageContainer = styled(Img)`
  width: 100%;
  height: 300px;
  max-width: 1781.99px;

  @media (min-width: ${breakpointSmall}) {
    height: 80vh;
  }
`
