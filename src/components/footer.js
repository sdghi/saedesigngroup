import React from "react"
import styled from "styled-components"
import { breakpointSmall, breakpointMedium } from "../variables"

const Footer = () => {
  return (
    <FooterContent>
      <img src={"/contact-us.svg"} alt="contact us call to action" />
      <ContactInfo>
        <p>Maui 2261 Aupuni Street #101 Wailuku, HI 96793</p>
        <p>808.249.2200</p>
      </ContactInfo>
      <ContactInfo>
        <p>Oahu 555 South Street #108 Honolulu, HI 96813</p>
        <p>808.544.0002</p>
      </ContactInfo>
      <ContactInfo className="center">
        <p>
          <span>info@saedesign.com</span> <span>insta</span> |{" "}
          <span>bonus</span>
        </p>
      </ContactInfo>
    </FooterContent>
  )
}

export default Footer

const FooterContent = styled.footer`
  padding: 20px;

  @media (min-width: ${breakpointSmall}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (min-width: ${breakpointMedium}) {
    padding: 64px;
  }
`

const ContactInfo = styled.div`
  font-weight: 700;
  font-size: 16px;

  p {
    margin: 0;
    line-height: 1.9;
  }

  @media (min-width: ${breakpointSmall}) {
    width: 236px;

    &.center {
      height: 126px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: 20px;
  }
`
