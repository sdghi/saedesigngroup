import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { Container, Paragraph } from "../elements"
import { breakpointSmall } from "../variables"

const LargeImage = ({ slice }) => {
  const { image, caption } = slice.primary

  return (
    <Container>
      <ImageContainer
        fluid={image.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={image.alt}
        stlye={{ width: "90vw", height: "500px" }}
      />

      {caption && (
        <Paragraph textAlign="center" top="20px">
          {caption.text}
        </Paragraph>
      )}
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
