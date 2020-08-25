import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { breakpointSmall, breakpointMedium, black, pink } from "../variables"

const Footer = () => {
  return (
    <FooterContent>
      <Link to="/contact">
        <img src={"/contact-us.svg"} alt="contact us call to action" />
      </Link>
      <ContactInfo>
        <a href="https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225">
          Maui
          <br /> 2261 Aupuni Street #101 Wailuku, HI 96793
        </a>{" "}
        <br />
        <a href="tel:808-249-2200">808.249.2200</a>
      </ContactInfo>
      <ContactInfo>
        <a href="https://www.google.com/maps/place/555+South+St+%23+108,+Honolulu,+HI+96813/@21.3010374,-157.8602161,19.86z/data=!4m5!3m4!1s0x7c006e0bd43706f7:0x8fb115c33548023e!8m2!3d21.301411!4d-157.8602513">
          Oahu <br /> 555 South Street #108 Honolulu, HI 96813
        </a>{" "}
        <br />
        <a href="tel:808-544-0002">808.544.0002</a>
      </ContactInfo>
      <ContactInfo className="center">
        <a href="mailto: info@saedesign.com">info@saedesign.com</a>
        <span>
          <a
            href="https://www.instagram.com/saedesignhi/?hl=en"
            title="instagram"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>SD_icon</title>
              <path d="M10,5.32A4.65,4.65,0,1,0,14.65,10,4.66,4.66,0,0,0,10,5.32Zm0,7.62a3,3,0,1,1,3-3A3,3,0,0,1,10,12.94Z" />
              <circle cx="14.83" cy="5.21" r="1.05" />
              <path d="M17.55,2.49A5.19,5.19,0,0,0,13.74,1H6.26A5,5,0,0,0,1,6.26V13.7a5.24,5.24,0,0,0,1.52,3.88A5.28,5.28,0,0,0,6.3,19h7.4a5.34,5.34,0,0,0,3.81-1.42A5.18,5.18,0,0,0,19,13.74V6.26A5.21,5.21,0,0,0,17.55,2.49Zm-.22,11.25a3.53,3.53,0,0,1-1,2.65,3.77,3.77,0,0,1-2.65.94H6.3a3.77,3.77,0,0,1-2.65-.94,3.67,3.67,0,0,1-1-2.69V6.26a3.64,3.64,0,0,1,1-2.65A3.72,3.72,0,0,1,6.3,2.67h7.47a3.63,3.63,0,0,1,2.65,1,3.72,3.72,0,0,1,1,2.61v7.48Z" />
            </svg>
          </a>{" "}
          |{" "}
          <a
            href="https://saemin.saedesign.com"
            className="saemin-link"
            title="saemin"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>SD_icon</title>
              <path d="M18,8.43A8.17,8.17,0,0,1,2,8.43H18M20,6.6H0a10,10,0,1,0,20,0Z" />
              <rect
                x="8.73"
                y="3.93"
                width="8.68"
                height="1.65"
                transform="translate(-0.12 9.17) rotate(-38.51)"
              />
              <rect
                x="12.04"
                y="5.04"
                width="6.82"
                height="1.65"
                transform="translate(-0.84 8.61) rotate(-30.36)"
              />
              <polygon points="14.74 18.94 5.26 18.94 5.26 14.7 6.74 14.7 6.74 17.46 13.26 17.46 13.26 14.7 14.74 14.7 14.74 18.94" />
            </svg>
          </a>
        </span>
      </ContactInfo>
    </FooterContent>
  )
}

export default Footer

const FooterContent = styled.footer`
  padding: 20px;

  img {
    margin-bottom: 33px;
    width: 220px;
  }

  @media (min-width: ${breakpointSmall}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    img {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpointMedium}) {
    padding: 64px;

    img {
      width: 300px;
    }
  }
`

const ContactInfo = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 33px;
  width: 300px;

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    margin: 0;
    line-height: 1.9;
    color: ${black};
  }

  svg {
    height: 100%;
    width: 100%;
    fill: ${black};

    &:hover {
      fill: ${pink};
    }
  }

  &.center {
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      display: grid;
      grid-template-columns: 40px 1fr 40px;
      grid-gap: 10px;
      place-items: center;
      align-items: center;
      width: fit-content;

      a {
        line-height: 0;
      }
    }
  }

  @media (min-width: ${breakpointSmall}) {
    width: 236px;
    font-size: 14px;
    margin-bottom: 0;
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: 20px;
  }
`
