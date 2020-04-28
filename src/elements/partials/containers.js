import styled from "styled-components"
import { motion } from 'framer-motion'
import { breakpointSmall } from "../../variables"
import Img from "gatsby-image/withIEPolyfill"

export const Container = styled(motion.section)`
  padding: ${({ padding }) => padding ? padding : "0 5%"};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${ ({ width }) => width};
  margin: ${ ({ margin }) => margin ? margin : "0 auto 20vh auto"};
  height: ${({ height }) => height};

@media(min-width: ${ breakpointSmall}) {
  padding: ${ ({ paddingMd, padding }) => paddingMd ? paddingMd : padding};
  margin: ${ ({ marginMd, margin }) => marginMd ? marginMd : margin};
  height: ${({ heightMd, height }) => heightMd ? heightMd : height};
}
`

export const ImageContainer = styled(Img)`
  width: ${ ({ width }) => width ? width : "100%"};
  height: ${ ({ height }) => height ? height : "300px"};
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : "1781.99px"};
  margin: ${ ({ margin }) => margin ? margin : "0 auto"};

@media(min-width: ${ breakpointSmall}) {
  height: ${ ({ heightMd }) => heightMd ? heightMd : "80vh"};
  width: ${ ({ widthMd }) => widthMd ? widthMd : "100%"};
  margin: ${ ({ marginMd }) => marginMd ? marginMd : "0 auto"};
}
`
