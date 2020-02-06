import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const AboutCursor = ({ xValue, yValue }) => {
  return (
    <About
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="999999"
    ></About>
  )
}

export default AboutCursor

const About = styled(Cursor)`
  background: teal;
`
