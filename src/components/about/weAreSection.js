import React, { useEffect, useState } from "react"
import { Container, Paragraph } from "../../elements"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const WeAreSection = ({ weAre }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const countChange = setInterval(() => {
      if (count === weAre.length - 1) {
        setCount(0)
      } else {
        setCount(count + 1)
      }
    }, [2200])

    return () => {
      clearInterval(countChange)
    }
  }, [count, weAre.length])

  const variants = {
    enter: {
      y: -40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <Container margin="0" padding="0">
      <ContentContainer>
        <Paragraph fontSize="1.4rem" fontSizeMd="48px" fontWeight="700">
          We are &nbsp;
          <AnimatePresence exitBeforeEnter>
            <motion.span
              className="we-are-text"
              variants={variants}
              initial="enter"
              animate="visible"
              exit="exit"
              key={count}
            >
              {weAre[count].content.text}
            </motion.span>
          </AnimatePresence>
        </Paragraph>
      </ContentContainer>
    </Container>
  )
}

export default WeAreSection

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 20px;

  .we-are-text {
    position: absolute;
  }
`
