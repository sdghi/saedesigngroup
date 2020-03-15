import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"
import { breakpointMedium, grey } from "../variables"
import styled from "styled-components"

const ImageCaption = ({ slice }) => {
  const { image, caption, layout } = slice.primary

  const { fluid: imageSrc } = image.localFile.childImageSharp

  return (
    <TwoThirdContainer className={layout === 'Image Right Caption Left' && 'image-right'}>
      <ImageContainer fluid={imageSrc} alt={image.alt} />
      <Paragraph>{caption.text}</Paragraph>
    </TwoThirdContainer>
  )
}

export default ImageCaption

const TwoThirdContainer = styled(Container)`
  ${Paragraph} {
    font-size: 12px;
    line-height: 18px;
    color: ${grey};
    text-align: center;
  }

  @media (min-width: ${breakpointMedium}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    place-items: center;

    ${Paragraph} {
      max-width: 194px;
      font-size: 14px;
      line-height: 26px;
      text-align: left;
    }

    &.image-right{
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "paragraph image";
      
      ${Paragraph}{
        grid-area: paragraph;
      }

      ${ImageContainer}{
        grid-area: image;
      }
    }
  }
`
