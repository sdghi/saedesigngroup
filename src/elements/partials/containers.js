import styled from "styled-components"
import { breakpointSmall } from "../../variables"
import Img from "gatsby-image"

export const Container = styled.section`
  padding: ${props => (props.padding ? props.padding : "0 5%")};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  margin: ${props => (props.margin ? props.margin : "0 auto 20vh auto")};

  @media (min-width: ${breakpointSmall}) {
    padding: ${props => (props.paddingMd ? props.paddingMd : props.padding)};
  }
`

export const ImageContainer = styled(Img)`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "300px")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "1781.99px")};
  margin: ${props => (props.margin ? props.margin : "0 auto")};

  @media (min-width: ${breakpointSmall}) {
    height: ${props => (props.heightMd ? props.heightMd : "80vh")};
    width: ${props => (props.widthMd ? props.widthMd : "100%")};
    margin: ${props => (props.marginMd ? props.marginMd : "0 auto")};
  }
`
