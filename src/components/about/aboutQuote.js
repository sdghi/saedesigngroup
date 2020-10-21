import React, { useState, useEffect } from "react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import styled from "styled-components"
import { Container, Paragraph, HeadingTwo } from "../../elements"
import { pink, breakpoint4k } from "../../variables"

const AboutQuote = ({ quotes }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleQuoteChange = setInterval(() => {
      if (current === quotes.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 5000)
    return () => clearInterval(handleQuoteChange)
  }, [current, quotes.length])

  const quoteVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return (
    <QuoteContainer paddingMd="50px 0" margin="0" layout>
      <ClientsHeader fontSize="48px">Take it from our clients</ClientsHeader>
      <AnimatePresence exitBeforeEnter>
        <Quote
          variants={quoteVariants}
          key={current}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Paragraph fontSizeMd="30px" lineHeight="1.6">
            <q>{quotes[current].quote.text}</q>
          </Paragraph>
          <Paragraph className="testifier" fontSize="17px" textAlign="right">
            - {quotes[current].quote_author.text}
          </Paragraph>
        </Quote>
      </AnimatePresence>
    </QuoteContainer>
  )
}

export default AboutQuote

const ClientsHeader = styled(HeadingTwo)`
  padding-top: 10vh;
  text-align: center;

  @media (min-width: ${breakpoint4k}) {
    top: 30%;
  }
`

const QuoteContainer = styled(Container)`
  position: relative;
`

const Quote = styled(motion.div)`
  max-width: 951px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10vh;

  p {
    text-indent: -0.4125em;
  }

  .testifier {
    color: ${pink};
  }
`
