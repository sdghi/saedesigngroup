import React from "react"
import InitialCursor from "./cursors/initialCursor"

const CustomCursor = ({ xValue, yValue, cursorElement }) => {
  switch (cursorElement) {
    case "initial":
      return <InitialCursor xValue={xValue} yValue={yValue} />
    default:
      return null
  }
}

export default CustomCursor
