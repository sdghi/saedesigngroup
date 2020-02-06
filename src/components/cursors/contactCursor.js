import React from "react"
import { Cursor } from "../../elements"
import styled from "styled-components"

const ContactCursor = ({ xValue, yValue }) => {
  return (
    <Contact
      top={yValue}
      left={xValue}
      height="50"
      width="50"
      zIndex="999999"
    ></Contact>
  )
}

export default ContactCursor

const Contact = styled(Cursor)`
  background: wheat;
`
