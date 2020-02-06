import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const InitialCursor = ({ xValue, yValue }) => {
  return (
    <Initial
      top={yValue}
      left={xValue}
      height="20"
      width="20"
      borderRadius="50%"
      zIndex="99999999999"
    ></Initial>
  )
}

export default InitialCursor

const Initial = styled(Cursor)`
  background: blue;
`
