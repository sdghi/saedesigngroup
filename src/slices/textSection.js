import React from "react"
import styled from "styled-components"
import { Container } from "../elements"

const TextSection = ({ slice, theme }) => {
  const heading = slice.primary.heading.text
  const text = slice.primary.text.text

  return (
    <ContainerSection maxWidth="850px">
      {theme}
      <h1>{heading}</h1>
      <p>{text}</p>
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
