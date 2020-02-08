import React from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { breakpointSmall, breakpointMedium, black } from "../variables"

const Footer = () => {
  return (
    <FooterContent>
      <Link to="/contact">
        <img src={"/contact-us.svg"} alt="contact us call to action" />
      </Link>
      <ContactInfo>
        <a
          href="https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maui 2261 Aupuni Street #101 Wailuku, HI 96793
        </a>{" "}
        <br />
        <a href="tel:808-249-2200">808.249.2200</a>
      </ContactInfo>
      <ContactInfo>
        <a
          href="https://www.google.com/maps/place/555+South+St+%23+108,+Honolulu,+HI+96813/@21.3010374,-157.8602161,19.86z/data=!4m5!3m4!1s0x7c006e0bd43706f7:0x8fb115c33548023e!8m2!3d21.301411!4d-157.8602513"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oahu 555 South Street #108 Honolulu, HI 96813
        </a>{" "}
        <br />
        <a href="tel:808-544-0002">808.544.0002</a>
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

  a {
    margin: 0;
    line-height: 1.9;
    color: ${black};
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
