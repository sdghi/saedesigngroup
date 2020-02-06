import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const WorkCursor = ({ xValue, yValue }) => {
  return (
    <Work
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="999999"
    ></Work>
  )
}

export default WorkCursor

const Work = styled(Cursor)`
  background: purple;
`
