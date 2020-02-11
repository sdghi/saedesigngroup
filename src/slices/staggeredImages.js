import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { Paragraph, Container } from "../elements"

const StaggeredImages = ({ slice }) => {
  // Destructure items
  const { caption, image_1, image_2 } = slice.primary
  // Destructure Image items
  const { fluid: imageOneSrc } = image_1.localFile.childImageSharp
  const { fluid: imageTwoSrc } = image_2.localFile.childImageSharp

  return (
    <StaggeredImageContainer>
      <div className="staggered-top">
        <Img fluid={imageOneSrc} alt={image_1.alt} />
        <Paragraph>{caption.text}</Paragraph>
      </div>
      <Img fluid={imageTwoSrc} alt={image_2.alt} />
    </StaggeredImageContainer>
  )
}

export default StaggeredImages

const StaggeredImageContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
  }

  .staggered-top {
    /* display: flex; */
    align-items: center;
  }
`
