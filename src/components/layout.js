import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../utils"
import Header from "./header"
import CustomCursor from "./customCursor"
import { myContext } from "../provider"
import Footer from "./footer"

const Layout = ({ children }) => {
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

  const [showCursor, setShowCursor] = useState(false)

  const trackMouse = e => {
    const { clientX, clientY } = e
    setYValue(clientY)
    setXValue(clientX)
  }

  // Disable the cursor until the user moves their mouse
  useEffect(() => {
    setShowCursor(false)
  }, [])

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

      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
