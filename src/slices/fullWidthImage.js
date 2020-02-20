import React from "react"
import { ImageContainer, Container } from "../elements"
import { loadingContentColor } from "../variables"

const FullWidthImage = ({ slice }) => {
  const { full_image } = slice.primary
  const { fluid: imageSrc } = full_image.localFile.childImageSharp

  return (
    <Container padding="0">
      <ImageContainer
        height="100vh"
        width="100%"
        heightMd="100vh"
        widthMd="100%"
        maxWidth="100%"
        fluid={imageSrc}
        alt={full_image.alt}
        backgroundColor={loadingContentColor}
      />
    </Container>
  )
}

export default FullWidthImage
