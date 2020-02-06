import React from "react"
import styled from "styled-components"
import { breakpointMedium } from "../variables"

const CustomCursor = ({ xValue, yValue }) => {
  return (
    <Cursor top={yValue} left={xValue} height="20" width="100" zIndex="99999">
      cursor
    </Cursor>
  )
}

export default CustomCursor

const Cursor = styled.div`
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
  transition: transform 0.1s ease;

  @media (min-width: ${breakpointMedium}) {
    display: grid;
  }
`
