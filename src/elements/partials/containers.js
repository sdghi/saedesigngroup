import styled from "styled-components"

export const Container = styled.section`
  padding: ${props => props.padding};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  margin: ${props => (props.margin ? props.margin : "0 0 10vh 0")};
`
