import React from "react"
import { Cursor } from "../../elements"

const InitialCursor = ({ xValue, yValue }) => {
  return (
    <Cursor
      top={yValue}
      left={xValue}
      height="20"
      width="100"
      zIndex="99999999999"
    >
      initial
    </Cursor>
  )
}

export default InitialCursor
