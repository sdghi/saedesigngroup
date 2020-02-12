import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"

const LargeImage = ({ slice }) => {
  const { image, caption } = slice.primary

  return (
    <Container>
      <ImageContainer
        fluid={image.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={image.alt}
      />

      {caption && (
        <Paragraph
          textAlign="center"
          top="20px"
          fontSize="14px"
          lineHeight="26px"
          color="#818386"
        >
          {caption.text}
        </Paragraph>
      )}
    </Container>
  )
}

export default LargeImage
