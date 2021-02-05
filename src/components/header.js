import React from "react"
import styled from "styled-components"
import { useCursorChange } from "../hooks"
import { pink } from "../variables"
import { motion } from "framer-motion"
import SiteBranding from "./siteBranding"

const Header = ({ toggleNav, isNavOpen }) => {
  const [bind] = useCursorChange({ selected: "selected" })

  return (
    <header>
      <SiteBranding />
      <ToggleBtn onClick={toggleNav} {...bind}>
        <motion.h2 whileHover={{ scale: 1.2, rotate: 4 }}>
          {isNavOpen ? "close" : "menu"}
        </motion.h2>
      </ToggleBtn>
    </header>
  )
}

export default Header

const ToggleBtn = styled.div`
  position: fixed;
  top: 31px;
  right: 20px;
  z-index: 99999;
  font-weight: 600;
  color: ${pink};
  transition: all 0.01s ease-in;
  user-select: none;

  h2 {
    font-size: 20px;
    margin: 0;
  }
`
