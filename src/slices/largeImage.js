import React from "react"
import { Container, ImageContainer } from "../elements"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const LargeImage = ({ slice }) => {
  const { image, full_width } = slice.primary

  return (
    <ScrollWrapper>
      <Container padding={full_width === 'true' && "0"}>
        <ImageContainer
          fluid={image.localFile.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={image.alt}
          // Togggle if the full_width is checked in the cms 
          maxWidth={full_width === 'true' && '100%'}
          height={full_width === 'true' && "100vh"}
          heightMd={full_width === 'true' && "100vh"}

        />

      </Container>
    </ScrollWrapper>
  )
}

export default LargeImage
