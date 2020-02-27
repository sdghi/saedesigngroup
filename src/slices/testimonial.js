import React from "react"
import styled from "styled-components"
import { Container, Paragraph } from "../elements"
import { lightGrey } from "../variables"

const Testimonial = ({ slice }) => {
  const testimonialContent = slice.primary.text.text

  return (
    <Container maxWidth="850px" padding="0">
      <QuoteMark>&#8220;</QuoteMark>
      <Paragraph
        fontSize="15px"
        fontSizeMd="18px"
        fontSizeLg="21px"
        textAlign="center"
        lineHeight="36px"
      >
        {testimonialContent}
      </Paragraph>
      <QuoteMark>&#8221;</QuoteMark>
    </Container>
  )
}

export default Testimonial

const QuoteMark = styled.h2`
  text-align: center;
  margin: 0 auto;
  font-size: 110px;
  line-height: 1.5;
  color: ${lightGrey};
`
