import React from "react"
import styled from "styled-components"
import { Container, HeadingTwo, Paragraph } from "../elements"
import { grey, breakpointSmall } from "../variables"
import ScrollWrapper from "../components/wrappers/scrollWrapper"

const TextSection = ({ slice, theme }) => {
  const { heading, text, bottom_sub_text } = slice.primary
  return (
    <ScrollWrapper>
      <ContainerSection maxWidth="850px" paddingMd="0">
        <HeadingTwo
          fontSize="27px"
          fontSizeLg="36px"
          lineHeight="41px"
          lineHeightMd="49px"
        >
          {heading.text}
        </HeadingTwo>

        <div
          className="content-container"
          dangerouslySetInnerHTML={{ __html: text.html }}
        />

        {bottom_sub_text && (
          <Paragraph
            fontSize="16px"
            color={grey}
            css="text-transform: uppercase; padding-top: 60px; letter-spacing: 0.1em; line-height: 2;"
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

  ${HeadingTwo} {
    font-weight: 400;
  }

  .content-container p {
    font-size: 18px;
    line-height: 2;
  }
`

export default TextSection
