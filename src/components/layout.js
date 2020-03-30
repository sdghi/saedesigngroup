import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../utils"
import Header from "./header"
import CustomCursor from "./customCursor"
import { myContext } from "../provider"
import Footer from "./footer"
import { AnimatePresence, motion } from 'framer-motion'

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

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    xValue,
    yValue,
    setXValue,
    setYValue,
    cursorElement,
    setCursorElement,
  } = useContext(myContext)

  const [showCursor, setShowCursor] = useState(false);

  const trackMouse = e => {
    const { clientX, clientY } = e
    setYValue(clientY)
    setXValue(clientX)
  }

  // Disable the cursor until the user moves their mouse
  useEffect(() => {
    setShowCursor(false)
    setCursorElement({ initial: "initial" })
  }, [setShowCursor, location.pathname,])

  const handleTrackCursor = e => {
    setShowCursor(true)
    trackMouse(e)
  }

  return (
    <div
      onMouseMove={e => {
        handleTrackCursor(e)
      }}
    >
      <Header
        siteTitle={data.site.siteMetadata.title}
        setCursorElement={setCursorElement}
      />
      <GlobalStyle />
      {showCursor && (
        <CustomCursor
          xValue={xValue}
          yValue={yValue}
          cursorElement={cursorElement}
        />
      )}

      <AnimatePresence>
        <motion.main
          key={location && location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
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

export default Layout
