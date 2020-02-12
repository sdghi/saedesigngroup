import styled from "styled-components"
import { breakpointSmall, breakpointMedium } from "../../variables"

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  color: ${props => props.color};

  @media (min-width: ${breakpointSmall}) {
    font-size: ${props => props.fontSizeMd};
    line-height: ${props => props.lineHeightMd};
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: ${props => props.fontSizeLg};
    line-height: ${props => props.lineHeightLg};
  }
`
export const HeadingTwo = styled.h2`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  color: ${props => props.color};

  @media (min-width: ${breakpointSmall}) {
    font-size: ${props => props.fontSizeMd};
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: ${props => props.fontSizeLg};
  }
`
