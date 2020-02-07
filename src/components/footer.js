import React from "react"
import styled from "styled-components"
import { breakpointSmall } from "../variables"

const Footer = () => {
  return (
    <FooterContent>
      <img src={"/contact-us.svg"} alt="contact us call to action" />
      <ContactInfo>
        Maui 2261 Aupuni Street #101 Wailuku, HI 96793 808.249.2200
      </ContactInfo>
      <ContactInfo>
        Oahu 555 South Street #108 Honolulu, HI 96813 808.544.0002
      </ContactInfo>
      <ContactInfo className="center">
        info@saedesign.com insta | bonus
      </ContactInfo>
    </FooterContent>
  )
}

export default Footer

const FooterContent = styled.footer`
  padding: 20px;

  @media (min-width: ${breakpointSmall}) {
    padding: 64px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

const ContactInfo = styled.div`
  font-weight: 700;
  width: 236px;
  font-size: 20px;
  line-height: 1.9;

  &.center {
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
