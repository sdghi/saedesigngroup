import React, { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "../components/header"
import PropTypes from "prop-types"
import { useAppContext } from "../provider"
import { useToggle } from "../hooks"
import { GlobalStyle } from "../utils"
import Footer from "./footer"
import CustomCursor from "./customCursor"

import Navigation from "./navigation"

const Layout = ({ children, location }) => {
  const { cursorElement, setCursorElement } = useAppContext()

  const [isNavOpen, toggleNav] = useToggle()

  useEffect(() => {
    setCursorElement({ initial: "initial" })
    return () => setCursorElement({ initial: "initial" })
  }, [location.pathname, isNavOpen])

  return (
    <div>
      <GlobalStyle />

      <CustomCursor cursorElement={cursorElement} />

      <AnimatePresence>
        {isNavOpen && (
          <Navigation
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
            setCursorElement={setCursorElement}
          />
        )}
      </AnimatePresence>

      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <main key={location && location.pathname}>{children}</main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
