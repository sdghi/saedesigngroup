import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const LargeImage = ({ slice }) => {
  const { image, caption, full_width, caption_alignment } = slice.primary

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

        {caption && (
          <Paragraph
            textAlign={caption_alignment ? caption_alignment : 'center'}
            style={{
              maxWidth: "1000px",
              margin: caption_alignment === 'right' ? "20px 0 0 auto" : "20px auto 0 auto"
            }}
            fontSize="14px"
            lineHeight="26px"
            color="#818386"
          >
            {caption.text}
          </Paragraph>
        )}
      </Container>
    </ScrollWrapper>
  )
}

export default LargeImage
