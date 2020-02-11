import styled from "styled-components"
import { breakpointSmall, breakpointMedium } from "../../variables"

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  margin-top: ${props => props.top};

  @media (min-width: ${breakpointSmall}) {
    font-size: ${props => props.fontSizeMd};
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: ${props => props.fontSizeLg};
  }
`
