import React from "react"
import { Container } from "../elements"
import { breakpointSmall } from "../variables"
import styled from "styled-components"

const Logos = () => {
  return (
    <LogoContainer padding="0 5%" paddingMd="0 15%">
      <h1>logo 1</h1>
      <h1>logo 2</h1>
      <h1>logo 3</h1>
    </LogoContainer>
  )
}

export default Logos

const LogoContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${breakpointSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  h1 {
    height: 300px;
    width: 100%;
    background: red;
    margin: 0;
  }
`
