import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { black, pink, yellow } from "../variables"
import { useToggle } from '../hooks'
// Components
import SiteBranding from "./siteBranding"
import Navigation from "./navigation"

const Header = ({ setCursorElement }) => {
  // const [isNavOpen, setNav] = useState(false)

  const [isNavOpen, toggleNav] = useToggle();

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "visible"
  }, [isNavOpen])

  return (
    <SiteHeader onMouseEnter={() => setCursorElement({ initial: "initial" })}>

      <Link to="/" className={`site-branding`}>
        <SiteBranding toggleNav={toggleNav} isNavOpen={isNavOpen} />
      </Link>
      <Navigation
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        setCursorElement={setCursorElement}
      />
      <ToggleBtn
        onClick={toggleNav}
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
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .site-branding {
    width: fit-content;
  }
`

const ToggleBtn = styled.div`
  font-weight: 600;
  color: ${pink};
  transition: all 0.01s ease-in;
  user-select: none;

  h2 {
    font-size: 20px;
    margin: 0;
  }

  @media (min-width: 768px) {
    &:hover {
      h2 {
        color: ${yellow};
        transform: scale(1.05) rotate(-4deg);
        transition: all 0.01s ease-out;
      }
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
