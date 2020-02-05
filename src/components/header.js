import React, { useState } from "react"
import Link from "gatsby-plugin-transition-link"
import PropTypes from "prop-types"
import styled from "styled-components"
import { black, pink, yellow } from "../variables"
// Components
import SiteBranding from "./siteBranding"
import Navigation from "./navigation"

const Header = () => {
  const [isNavOpen, setNav] = useState(false)

  return (
    <SiteHeader>
      <Link to="/" className={`site-branding`}>
        <SiteBranding />
      </Link>
      <Navigation isNavOpen={isNavOpen} />
      <ToggleBtn
        onClick={() => {
          setNav(!isNavOpen)
        }}
      >
        <h2>{isNavOpen ? "close" : "menu"}</h2>
      </ToggleBtn>
    </SiteHeader>
  )
}

const SiteHeader = styled.header`
  height: 7vh;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  background: ${black};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .site-branding {
    height: 60%;
    width: fit-content;

    svg {
      height: 100%;
      fill: ${pink};

      &:hover {
        fill: ${yellow};
      }
    }
  }
`

const ToggleBtn = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${pink};
  transition: all 0.01s ease-in;
  user-select: none;

  @media (min-width: 768px) {
    &:hover {
      h2 {
        color: ${yellow};
        -webkit-text-stroke-color: ${yellow};
        transform: scale(1.05) rotate(-4deg);
        transition: all 0.01s ease-out;
      }
    }

    h2 {
      -webkit-text-stroke-width: 0.75px;
      -webkit-text-stroke-color: ${pink};
      color: transparent;
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
