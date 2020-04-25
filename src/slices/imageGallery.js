import React, { useState, useRef, useEffect } from "react"
import { Container, ImageContainer } from "../elements"
import styled from "styled-components"
import { useAppContext } from "../provider"
import { grey, lightGrey } from "../variables"
import ScrollWrapper from '../components/wrappers/scrollWrapper'
import { AnimatePresence, motion } from 'framer-motion'

const ImageGallery = ({ slice }) => {
  const items = slice.items
  const [visibleImage, setVisibleImage] = useState(0)
  const [nextImage, setNextImage] = useState(null)
  const slideshowRef = useRef(null)
  const { xValue, setCursorElement } = useAppContext()

  // TODO Go to next image every 5 seconds - useEffect

  const toggleSlideshowCursors = () => {
    // Get the total width of container and get halfway point
    const halfwayPoint = slideshowRef.current.clientWidth / 2

    // Get the current mouse position and see if it past the halfway point
    if (xValue > halfwayPoint) {
      // Set to next
      setCursorElement({ related: "&#x2192;" })
      setNextImage(true)
    } else {
      // Set to prev
      setCursorElement({ related: "&#x2190;" })
      setNextImage(false)
    }
  }

  // Go to the next image if the visibleImage value is less than the lenght - 1
  const handleSlideshowImage = () => {
    // If nextImage then go to next, else go to prev
    if (nextImage) {
      if (visibleImage < items.length - 1) {
        setVisibleImage(visibleImage + 1)
      } else {
        setVisibleImage(0)
      }
    } else {
      if (visibleImage > 0) {
        setVisibleImage(visibleImage - 1)
      } else {
        setVisibleImage(items.length - 1)
      }
    }
  }

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (visibleImage < items.length - 1) {
        setVisibleImage(visibleImage + 1)
      } else {
        setVisibleImage(0)
      }
    }, 5000);

    return () => clearInterval(imageInterval)

  }, [visibleImage, items.length])

  const galleryVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <ScrollWrapper>
      <GalleryContainer margin="0 0 20vh 0" padding="0" paddingMd="0 5%">
        <SlideshowWrapper
          onMouseMove={() => toggleSlideshowCursors()}
          onMouseLeave={() => setCursorElement({ initial: "initial" })}
          ref={slideshowRef}
          length={slice.items.length}
          onClick={() => handleSlideshowImage()}
        >
          <AnimatePresence exitBeforeEnter>
            <motion.div key={visibleImage} variants={galleryVariants} initial="hidden" animate="visible" exit="hidden">
              <ImageContainer
                fluid={items[visibleImage].gallery_image.localFile.childImageSharp.fluid}
                width="100%"
              />
            </motion.div>
          </AnimatePresence>

        </SlideshowWrapper>
        <div className="counter">
          {items.map((item, i) => item.gallery_image.localFile &&
            <button
              key={i}
              onClick={() => setVisibleImage(i)}
            >
              <div className={i === visibleImage ? "item selected" : "item"}></div>
            </button>
          )}
        </div>
      </GalleryContainer>
    </ScrollWrapper>
  )
}

export default ImageGallery

const GalleryContainer = styled(Container)`
  overflow: hidden;

  .counter {
    display: flex;
    width: fit-content;
    /* margin is 52 but minus the 20px padding top  */
    margin: 32px auto 0 auto;

    button{
      border: none;
      background: none;
      height: fit-content;
      padding: 20px 0;
      

      &:focus{
        outline: none;
      }

      &:hover{
        .item{
          background: ${grey};
        transition: all 0.2s ease-in;
        }
      }
    }

    .item {
      margin: 0 10px;
      background: ${lightGrey};
      width: 53px;
      height: 3.6px;
      transition: all 0.2s ease-out;

      &.selected {
        background: ${grey};
      }
    }
  }
`

const SlideshowWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;
`
