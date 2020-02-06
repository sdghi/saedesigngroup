import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const PackagingCursor = ({ xValue, yValue }) => {
  return (
    <Packaging
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="0"
    ></Packaging>
  )
}

export default PackagingCursor

const Packaging = styled(Cursor)`
  background: green;
`
