import React from "react"
import styled from "styled-components"
import { Paragraph, Container, ImageContainer } from "../elements"
import { breakpointSmall, breakpointMedium, grey } from "../variables"

const StaggeredImages = ({ slice }) => {
  // Destructure items
  const { caption, image_1, image_2 } = slice.primary
  // Destructure Image items
  const { fluid: imageOneSrc } = image_1.localFile.childImageSharp
  const { fluid: imageTwoSrc } = image_2.localFile.childImageSharp

  return (
    <StaggeredImageContainer>
      <ImageContainer
        fluid={imageOneSrc}
        alt={image_1.alt}
        widthMd="60%"
        margin="0 0 20px 0"
        marginMd="0"
      />
      <ImageContainer
        fluid={imageTwoSrc}
        alt={image_2.alt}
        widthMd="60%"
        marginMd="-10% 0 0 auto"
      />

      {caption && <Paragraph>{caption.text}</Paragraph>}
    </StaggeredImageContainer>
  )
}

export default StaggeredImages

const StaggeredImageContainer = styled(Container)`
  ${Paragraph} {
    margin-top: 30px;
    font-size: 14px;
    line-height: 26px;
    color: ${grey};
  }

  @media (min-width: ${breakpointSmall}) {
    display: flex;
    flex-direction: column;
    position: relative;

    ${Paragraph} {
      position: absolute;
      top: 20%;
      right: 5%;
      max-width: 250px;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    ${Paragraph} {
      right: 20%;
    }
  }
`
