import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const ServicesCursor = ({ xValue, yValue }) => {
  return (
    <Services
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="999999"
    ></Services>
  )
}

export default ServicesCursor

const Services = styled(Cursor)`
  background: orange;
`
