import styled from "styled-components"
import { breakpointMedium } from "../../variables"

export const Cursor = styled.div`
  position: fixed;
  display: none;
  place-items: center;
  z-index: ${props => props.zIndex};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-radius: ${props => props.borderRadius};
  pointer-events: none;
  transform: ${props => `translate(${props.left}px, ${props.top}px)`};
  left: ${props => `-${props.width / 2}px`};
  top: ${props => `-${props.height / 2}px`};

  @media (min-width: ${breakpointMedium}) {
    display: grid;
  }
`
