import styled from "styled-components"
import { breakpointSmall, breakpointMedium } from "../../variables"
import Img from "gatsby-image"

export const Container = styled.section`
  padding: ${props => (props.padding ? props.padding : "0 5%")};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  margin: ${props => (props.margin ? props.margin : "0 auto 10vh auto")};
`

export const ImageContainer = styled(Img)`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "300px")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "1781.99px")};
  margin: ${props => (props.margin ? props.margin : "0 auto")};

  @media (min-width: ${breakpointSmall}) {
    height: ${props => (props.heightMd ? props.heightMd : "80vh")};
  }
`
