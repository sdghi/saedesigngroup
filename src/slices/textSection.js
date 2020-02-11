import React from "react"
import styled from "styled-components"

const TextSection = ({ slice, theme }) => {
  console.log("Text section slice", slice)
  const heading = slice.primary.heading.text
  const text = slice.primary.text.text

  return (
    <ContainerSection>
      {theme}
      <h1>{heading}</h1>
      <p>{text}</p>
    </ContainerSection>
  )
}

const ContainerSection = styled.section`
  text-align: center;
  padding: 10vh 0;

  p {
    margin: auto;
    font-size: 1.4rem;
  }
`

export default TextSection
