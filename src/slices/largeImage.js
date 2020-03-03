import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"

const LargeImage = ({ slice }) => {
  const { image, caption, full_width } = slice.primary

  return (
    <Container padding={full_width === 'true' && "0"}>
      <ImageContainer
        fluid={image.localFile.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={image.alt}
        maxWidth={full_width === 'true' && '100%'}
        height={full_width === 'true' && "100vh"}
        heightMd={full_width === 'true' && "100vh"}

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
