import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import { Container, ImageContainer } from "../elements"
import { breakpointSmall, breakpointMedium, grey } from "../variables"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ScrollWrapper from "../components/wrappers/scrollWrapper"

const StaggeredImages = ({ slice }) => {
  // Destructure items
  const { caption, image_1, image_2, reverse_images } = slice.primary
  // Destructure Image items
  const { fluid: imageOneSrc } = image_1
  const { fluid: imageTwoSrc } = image_2
  // Handle Parallax
  // Set the element top
  const [elTop, setElTop] = useState(0)

  // Destructure the scroll Y value from useViewportScroll
  const { scrollY } = useViewportScroll()

  const ref = useRef()

  useLayoutEffect(() => {
    const element = ref.current
    setElTop(element.offsetHeight)
  }, [ref])

  const y = useTransform(scrollY, [elTop, elTop + 20], [0, -1], {
    clamp: false,
  })

  return (
    <StaggeredImageContainer
      reverseImages={reverse_images}
      margin="0 0 20vh 0"
      marginMd="0"
    >
      <ScrollWrapper>
        {/* Desktop Images  */}
        <motion.div className="desktop-image">
          <ImageContainer
            fluid={imageOneSrc}
            alt={image_1.alt}
            widthMd="60%"
            marginMd={reverse_images ? "0 0 0 auto" : "0"}
            width="80%"
            height="auto"
            heightMd="auto"
          />
        </motion.div>

        <motion.div ref={ref} style={{ y }} className="desktop-image">
          {caption && (
            <div
              className="desktop-caption caption"
              dangerouslySetInnerHTML={{ __html: caption.html }}
            ></div>
          )}
          <ImageContainer
            fluid={imageTwoSrc}
            alt={image_2.alt}
            width="80%"
            widthMd="60%"
            height="auto"
            heightMd="auto"
            marginMd={reverse_images ? "0 auto 0 0" : "0 0 0 auto"}
          />
        </motion.div>

        {/* Mobile Images  */}
        <ImageContainer
          fluid={imageOneSrc}
          alt={image_1.alt}
          width="100%"
          className="mobile-image"
        />
        <ImageContainer
          fluid={imageTwoSrc}
          alt={image_2.alt}
          width="100%"
          margin="20px 0 0 0"
          className="mobile-image"
        />

        {caption && (
          <div
            className="mobile-caption caption"
            dangerouslySetInnerHTML={{ __html: caption.html }}
          ></div>
        )}
      </ScrollWrapper>
    </StaggeredImageContainer>
  )
}

export default StaggeredImages

const StaggeredImageContainer = styled(Container)`
  .caption {
    font-size: 14px;
    line-height: 26px;
    color: ${grey};
  }

  .desktop-caption {
    display: none;
  }

  .desktop-image {
    display: none;
  }

  @media (min-width: ${breakpointSmall}) {
    display: flex;
    flex-direction: column;
    position: relative;

    .mobile-caption {
      display: none;
    }

    .desktop-caption {
      display: block;
    }

    .desktop-image {
      display: block;

      ${ImageContainer} {
        max-height: 100vh;
      }
    }

    .mobile-image {
      display: none;
    }

    .caption {
      position: relative;
      top: -140px;
      right: ${({ reverseImages }) => (reverseImages ? "none" : "2.5%")};
      left: ${({ reverseImages }) => (reverseImages ? "2.5%" : "none")};
      margin-left: ${({ reverseImages }) => (reverseImages ? "0" : "auto")};
      max-width: 258px;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    .caption {
      right: ${({ reverseImages }) => (reverseImages ? "none" : "10%")};
      left: ${({ reverseImages }) => (reverseImages ? "10%" : "none")};
    }
  }
`
