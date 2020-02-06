import React from "react"
import { Cursor } from "../elements"

const CustomCursor = ({ xValue, yValue, cursorElement }) => {
  switch (cursorElement) {
    case "initial":
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
    default:
      return null
  }
}

export default CustomCursor
