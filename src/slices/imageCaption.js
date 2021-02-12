import React from "react"
import { Container, Paragraph, ImageContainer } from "../elements"
import { breakpointMedium, grey } from "../variables"
import styled from "styled-components"
import ScrollWrapper from "../components/wrappers/scrollWrapper"

const ImageCaption = ({ slice }) => {
  const { image, caption, layout } = slice.primary

  return (
    <ScrollWrapper>
      <TwoThirdContainer
        padding="0"
        className={layout === "Image Right Caption Left" && "image-right"}
      >
        <ImageContainer fluid={image.fluid} alt={image.alt} />
        <div
          className="caption"
          dangerouslySetInnerHTML={{ __html: caption.html }}
        ></div>
      </TwoThirdContainer>
    </ScrollWrapper>
  )
}

export default ImageCaption

const TwoThirdContainer = styled(Container)`
  .caption {
    font-size: 15px;
    line-height: 22px;
    color: ${grey};
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: ${breakpointMedium}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    place-items: center;

    .caption {
      text-align: left;
      max-width: 194px;
    }

    ${Paragraph} {
      max-width: 194px;
      text-align: left;
    }

    &.image-right {
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "paragraph image";

      ${Paragraph} {
        grid-area: paragraph;
      }

      .gif-image-container,
      ${ImageContainer} {
        grid-area: image;
      }
    }
  }
`
