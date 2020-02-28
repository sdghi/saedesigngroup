import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"
import { white } from "../../variables"

const CaseStudyCursor = ({ xValue, yValue }) => {
    return (
        <CaseStudy
            top={yValue}
            left={xValue}
            height="200"
            width="200"
            zIndex="999999"
        >
            case study
    </CaseStudy>
    )
}

export default CaseStudyCursor

const CaseStudy = styled(Cursor)`
  font-size: 51px;
  font-weight: 700;
  color: ${white};
`
