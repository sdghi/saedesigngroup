import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import PropTypes from "prop-types"
import { pink } from '../variables'
import { useAppContext } from "../provider"
import { useToggle, useCursorChange } from '../hooks'
import { GlobalStyle } from "../utils"
import Footer from "./footer"
import CustomCursor from "./customCursor"
import SiteBranding from './siteBranding'
import Navigation from './navigation'

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {

  const {
    xValue,
    yValue,
    setXValue,
    setYValue,
    cursorElement,
    setCursorElement
  } = useAppContext()

  const [showCursor, setShowCursor] = useState(false);
  const [isNavOpen, toggleNav] = useToggle();
  const [bind] = useCursorChange({ selected: "selected" });


  // Disable the cursor until the user moves their mouse
  useEffect(() => {
    setShowCursor(false)
    setCursorElement({ initial: "initial" })

    return () => setCursorElement({ initial: "initial" })
  }, [location.pathname, isNavOpen])


  const trackMouse = e => {
    const { clientX, clientY } = e
    setYValue(clientY)
    setXValue(clientX)
  }

  const handleTrackCursor = e => {
    setShowCursor(true)
    trackMouse(e)
  }

  return (
    <div onMouseMove={e => { handleTrackCursor(e) }}>
      <GlobalStyle />

      {showCursor && (
        <CustomCursor
          xValue={xValue}
          yValue={yValue}
          cursorElement={cursorElement}
        />
      )}

      <AnimatePresence>
        {isNavOpen &&
          <Navigation
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
            setCursorElement={setCursorElement}
          />}
      </AnimatePresence>



      <AnimatePresence>
        <motion.main
          key={location && location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <SiteBranding />
          <ToggleBtn
            onClick={toggleNav}
            {...bind}
          >
            <motion.h2 whileHover={{ scale: 1.2, rotate: 4 }}>{isNavOpen ? "close" : "menu"}</motion.h2>
          </ToggleBtn>

          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

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

export default Layout




