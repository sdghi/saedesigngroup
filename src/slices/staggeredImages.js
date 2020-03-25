import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { Paragraph, Container, ImageContainer } from "../elements"
import { breakpointSmall, breakpointMedium, grey } from "../variables"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const StaggeredImages = ({ slice }) => {
  // Destructure items
  const { caption, image_1, image_2, reverse_images } = slice.primary
  // Destructure Image items
  const { fluid: imageOneSrc } = image_1.localFile.childImageSharp
  const { fluid: imageTwoSrc } = image_2.localFile.childImageSharp

  // Handle Parallax
  // Set the element top
  const [elTop, setElTop] = useState(0)

  // Destructure the scroll Y value from useViewportScroll
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elTop, elTop + 4], [0, -1], {
    clamp: false
  });

  const ref = useCallback(node => {
    if (node !== null) {
      setElTop(node.offsetTop)
    }
  }, []);

  return (

    <StaggeredImageContainer ref={ref} reverseImages={reverse_images} margin="0 0 20vh 0" marginMd="0">
      <ScrollWrapper>
        {/* Desktop Images  */}
        <motion.div className="desktop-image">
          <ImageContainer
            fluid={imageOneSrc}
            alt={image_1.alt}
            widthMd="60%"
            margin={reverse_images ? "0 0 20px auto" : "0 0 20px 0"}
            marginMd={reverse_images ? "0 0 0 auto" : "0"}
            width="80%"
            height="auto"
            heightMd="auto"
          />
        </motion.div>


        <motion.div style={{ y }} className="desktop-image">
          <ImageContainer
            fluid={imageTwoSrc}
            alt={image_2.alt}
            width="80%"
            widthMd="60%"
            height="auto"
            heightMd="auto"
            margin={reverse_images ? "-5% auto 0 0" : "-5% 0 0 auto"}
            marginMd={reverse_images ? "-5% auto 0 0" : "-5% 0 0 auto"}
          />
        </motion.div>

        {/* Mobile Images  */}
        <ImageContainer
          fluid={imageOneSrc}
          alt={image_1.alt}
          width="100%"
        />
        <ImageContainer
          fluid={imageTwoSrc}
          alt={image_2.alt}
          width="100%"
          margin="20px 0 0 0"
        />

        {caption &&
          <Paragraph>{caption.text}</Paragraph>
        }
      </ScrollWrapper>
    </StaggeredImageContainer>


  )
}

export default StaggeredImages

const StaggeredImageContainer = styled(Container)`

  ${Paragraph} {
    font-size: 14px;
    line-height: 26px;
    color: ${grey};
  }

  .desktop-image{
    display: none;
  }

  @media (min-width: ${breakpointSmall}) {
    display: flex;
    flex-direction: column;
    position: relative;

    .desktop-image{
    display: block;
  }

    ${Paragraph} {
      position: absolute;
      top: 25%;
      right: ${({ reverseImages }) => reverseImages ? 'none' : '5%'};
      left: ${({ reverseImages }) => reverseImages ? '5%' : 'none'};
      max-width: 258px;
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    ${Paragraph} {
      right: ${({ reverseImages }) => reverseImages ? 'none' : '20%'};
      left: ${({ reverseImages }) => reverseImages ? '15%' : 'none'};
    }
  }
`
