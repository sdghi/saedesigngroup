import React, { useEffect } from "react"
import styled from "styled-components"
import { Paragraph, Container, ImageContainer } from "../elements"
import { breakpointSmall, breakpointMedium, grey } from "../variables"
import { Parallax } from "giftbag"

const StaggeredImages = ({ slice }) => {
  // Destructure items
  const { caption, image_1, image_2 } = slice.primary
  // Destructure Image items
  const { fluid: imageOneSrc } = image_1.localFile.childImageSharp
  const { fluid: imageTwoSrc } = image_2.localFile.childImageSharp

  useEffect(() => {
    const ParallaxElements = document.querySelectorAll(".parallax-element")

    const parallax = new Parallax()

    parallax.setup({
      selector: ParallaxElements,
    })

    parallax.init()
  })

  return (
    <StaggeredImageContainer>
      <div className="parallax-element" data-parallax-speed="0.3">
        <ImageContainer
          fluid={imageOneSrc}
          alt={image_1.alt}
          widthMd="60%"
          margin="0 0 20px 0"
          marginMd="0"
          width="80%"
        />
      </div>

      <div className="parallax-element" data-parallax-speed="-0.2">
        <ImageContainer
          fluid={imageTwoSrc}
          alt={image_2.alt}
          width="80%"
          widthMd="60%"
          margin="-5% 0 0 auto"
          marginMd="5% 0 0 auto"
        />
      </div>

      {caption && <Paragraph>{caption.text}</Paragraph>}
    </StaggeredImageContainer>
  )
}

export default StaggeredImages

const StaggeredImageContainer = styled(Container)`
  ${Paragraph} {
    margin-top: 100px;
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
      top: 25%;
      right: 5%;
      max-width: 258px;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    ${Paragraph} {
      right: 20%;
    }
  }
`
