import styled from "styled-components"
import { breakpointMedium } from "../../variables"

export const Cursor = styled.div.attrs(props => ({
  style: {
    zIndex: props.zIndex,
    width: `${props.width}px`,
    height: `${props.height}px`,
    borderRadius: props.borderRadius,
    top: props.posTop ? props.posTop : `-${props.height / 2}px`,
    left: props.posLeft ? props.posLeft : `-${props.width / 2}px`,
    transform: `translate(${props.left}px, ${props.top}px)`,
  },
}))`
  position: fixed;
  place-items: center;
  pointer-events: none;

  @media (hover: none) {
    display: none;
  }
`
