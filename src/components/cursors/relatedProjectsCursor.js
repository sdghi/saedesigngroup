import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const RelatedProjectCursor = ({ xValue, yValue, cursorContent }) => {
  return (
    <RelatedProjects
      top={yValue}
      left={xValue}
      height="200"
      width="200"
      zIndex="999999"
    >
      {cursorContent}
    </RelatedProjects>
  )
}

export default RelatedProjectCursor

const RelatedProjects = styled(Cursor)`
  font-size: 51px;
  font-weight: 700;
`
