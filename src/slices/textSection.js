import React from "react"
import styled from "styled-components"
import { Container, HeadingTwo, Paragraph } from "../elements"
import { grey } from "../variables"

const TextSection = ({ slice, theme }) => {
  const heading = slice.primary.heading.text
  const text = slice.primary.text.text
  const bottomSubText = slice.primary.bottom_sub_text.text

  return (
    <ContainerSection maxWidth="850px" padding="0">
      <HeadingTwo
        fontSize="27px"
        fontSizeLg="34px"
        lineHeight="41px"
        lineHeightMd="49px"
      >
        {heading}
      </HeadingTwo>
      <Paragraph
        fontSize="15px"
        lineHeight="30px"
        fontSizeLg="18px"
        lineHeightMd="32px"
      >
        {text}
      </Paragraph>
      <Paragraph
        fontSize="14px"
        color={grey}
        css="text-transform: uppercase; padding-top: 60px"
      >
        {bottomSubText}
      </Paragraph>
    </ContainerSection>
  )
}

const ContainerSection = styled(Container)`
  text-align: center;

  p {
    margin: auto;
  }
`

export default TextSection
