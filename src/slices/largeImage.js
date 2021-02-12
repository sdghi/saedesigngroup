import React from "react"
import styled from "styled-components"
import { Container, ImageContainer } from "../elements"
import ScrollWrapper from "../components/wrappers/scrollWrapper"

const LargeImage = ({ slice }) => {
  const { image, full_width, caption } = slice.primary

  return (
    <ScrollWrapper>
      <Container padding={full_width === "true" && "0"}>
        <ImageContainer
          fluid={image.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={image.alt}
          // Togggle if the full_width is checked in the cms
          maxWidth={full_width === "true" && "100%"}
          height={full_width === "true" && "100vh"}
          heightMd={full_width === "true" && "100vh"}
        />
        {caption.text && <Caption>{caption.text}</Caption>}
      </Container>
    </ScrollWrapper>
  )
}

export default LargeImage

const Caption = styled.p`
  font-size: 15px;
  line-height: 22px;
  margin: 15px auto 0 auto;
  max-width: 75ch;
  text-align: center;
`
