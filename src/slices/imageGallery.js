import React, { useState, useRef, useEffect, useContext } from "react"
import { Container, ImageContainer } from "../elements"
import styled from "styled-components"
import { myContext } from "../provider"

const ImageGallery = ({ slice }) => {
  const Items = slice.items
  const [visibleImage, setVisibleImage] = useState(0)
  const [nextImage, setNextImage] = useState(null)
  const slideshowRef = useRef(null)
  const { xValue, setCursorElement } = useContext(myContext)

  // TODO Go to next image every 5 seconds - useEffect

  const toggleSlideshowCursors = () => {
    // Get the total width of container and get halfway point
    const halfwayPoint = slideshowRef.current.clientWidth / 2
    // Get the current mouse position
    if (xValue > halfwayPoint) {
      console.log("next")
      setNextImage(true)
    } else {
      console.log("prev")
      setNextImage(false)
    }
  }

  // Go to the next image if the visibleImage value is less than the lenght - 1
  const handleSlideshowImage = () => {
    // If nextImage then go to next, else go to prev
    if (nextImage) {
      if (visibleImage < Items.length - 1) {
        setVisibleImage(visibleImage + 1)
      } else {
        setVisibleImage(0)
      }
    } else {
      if (visibleImage > 0) {
        setVisibleImage(visibleImage - 1)
      } else {
        setVisibleImage(Items.length - 1)
      }
    }
  }

  return (
    <GalleryContainer margin="0 5% 20vh 5%" padding="0">
      <SlideshowWrapper
        onMouseMove={() => toggleSlideshowCursors()}
        ref={slideshowRef}
        length={slice.items.length}
        onClick={() => handleSlideshowImage()}
      >
        {Items.map((item, i) => (
          <div key={i}>
            {i === visibleImage && i < Items.length && (
              <ImageContainer
                fluid={item.gallery_image.localFile.childImageSharp.fluid}
                width="100%"
                maxWidth="100%"
              />
            )}
          </div>
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
  width: 100%;
  height: 80vh;
  position: relative;

  ${ImageContainer} {
    position: absolute;
    top: ${props => props.visible};
  }
`
