import React from "react"
import { Container, ImageContainer } from "../elements"
import styled from "styled-components"

const ImageGallery = ({ slice }) => {
  const Items = slice.items

  return (
    <GalleryContainer margin="0 5% 20vh 5%">
      <SlideshowWrapper length={slice.items.length}>
        {Items.map((item, i) => (
          <ImageContainer
            key={i}
            fluid={item.gallery_image.localFile.childImageSharp.fluid}
            width="100%"
          />
        ))}
      </SlideshowWrapper>
    </GalleryContainer>
  )
}

export default ImageGallery

const GalleryContainer = styled(Container)`
  overflow: hidden;
  border: 1px solid red;
`

const SlideshowWrapper = styled.div`
  width: ${props => `calc(100% * ${props.length})`};
  display: flex;
`
