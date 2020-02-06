import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const BrandingCursor = ({ xValue, yValue }) => {
  return (
    <Branding
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="0"
    ></Branding>
  )
}

export default BrandingCursor

const Branding = styled(Cursor)`
  background: red;
`
