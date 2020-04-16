import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"
import { white } from "../../variables"

const RelatedProjectCursor = ({ xValue, yValue, cursorContent }) => {
  return (
    <RelatedProjects
      top={yValue}
      left={xValue}
      height="200"
      width="200"
      zIndex="999999"
      dangerouslySetInnerHTML={{ __html: cursorContent }}
    />
  )
}

export default RelatedProjectCursor

const RelatedProjects = styled(Cursor)`
  font-size: 36px;
  font-weight: 700;
  color: ${white};
  text-align: center;
  line-height: 1;
`
