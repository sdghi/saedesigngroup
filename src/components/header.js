import React from "react"
import styled from "styled-components"
import { useCursorChange } from "../hooks"
import { yellow, black } from "../variables"
import { motion } from "framer-motion"
import SiteBranding from "./siteBranding"

const Header = ({ toggleNav, isNavOpen }) => {
  const [bind] = useCursorChange({ selected: "selected" })

  return (
    <SiteHeader>
      <SiteBranding isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <ToggleBtn onClick={toggleNav} {...bind}>
        <h2>{isNavOpen ? "Close" : "Menu"}</h2>
      </ToggleBtn>
    </SiteHeader>
  )
}

export default Header

const SiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`
const ToggleBtn = styled(motion.button)`
  font-weight: 600;
  color: ${black};
  transition: all 0.01s ease-in;
  user-select: none;
  background: ${yellow};
  border: 2px solid ${black};
  padding: 10px 20px;
  transition: all 0.1s ease-out;
  border-radius: 10px;

  &:focus {
    outline: 0;
  }

  &:hover {
    transition: all 0.1s ease-in;
    transform: rotate(5deg) scale(1.1);
  }

  h2 {
    font-size: 20px;
    margin: 0;
  }
`
