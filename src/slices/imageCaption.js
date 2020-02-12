import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"
import { breakpointMedium, grey } from "../variables"
import styled from "styled-components"

const ImageCaption = ({ slice }) => {
  console.log("Image caption slice", slice.primary)

  const { image, caption } = slice.primary

  const { fluid: imageSrc } = image.localFile.childImageSharp

  return (
    <TwoThirdContainer>
      <ImageContainer fluid={imageSrc} alt={image.alt} />
      <Paragraph textAlign="center">{caption.text}</Paragraph>
    </TwoThirdContainer>
  )
}

export default ImageCaption

const TwoThirdContainer = styled(Container)`
  ${Paragraph} {
    font-size: 12px;
    line-height: 18px;
    color: ${grey};
  }

  @media (min-width: ${breakpointMedium}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    align-items: center;
    place-items: center;

    ${Paragraph} {
      max-width: 190px;
      line-height: 22px;
    }
  }
`
