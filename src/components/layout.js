import React, { useState, useEffect } from "react"
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

  const [showCursor, setShowCursor] = useState(false)
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)

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
    <myContext.Consumer>
      {context => (
        <div
          onMouseMove={e => {
            handleTrackCursor(e)
          }}
        >
          <Header
            siteTitle={data.site.siteMetadata.title}
            setCursorElement={context.setCursorElement}
          />
          <GlobalStyle />
          {showCursor && (
            <CustomCursor
              xValue={xValue}
              yValue={yValue}
              cursorElement={context.cursorElement}
            />
          )}
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
