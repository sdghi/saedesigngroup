import React from "react"
import styled from "styled-components"
import { Container, HeadingTwo, Paragraph } from "../elements"
import { grey } from "../variables"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const TextSection = ({ slice, theme }) => {
  const { heading, text, bottom_sub_text } = slice.primary

  return (
    <ScrollWrapper>
      <ContainerSection maxWidth="850px" padding="0">
        <HeadingTwo
          fontSize="27px"
          fontSizeLg="34px"
          lineHeight="41px"
          lineHeightMd="49px"
        >
          {heading.text}
        </HeadingTwo>
        <Paragraph
          fontSize="15px"
          lineHeight="30px"
          fontSizeLg="18px"
          lineHeightMd="32px"
        >
          {text.text}
        </Paragraph>
        {bottom_sub_text && (
          <Paragraph
            fontSize="14px"
            color={grey}
            css="text-transform: uppercase; padding-top: 60px"
          >
            {bottom_sub_text.text}
          </Paragraph>
        )}
      </ContainerSection>
    </ScrollWrapper>
  )
}

const ContainerSection = styled(Container)`
  text-align: center;

  ${HeadingTwo}{
    font-weight: 400;
  }

  p {
    margin: auto;
  }
`

export default TextSection
