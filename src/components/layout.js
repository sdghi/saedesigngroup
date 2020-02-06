import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../utils"
import Header from "./header"
import CustomCursor from "./customCursor"
import { myContext } from "../provider"

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

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)

  const trackMouse = e => {
    const { clientX, clientY } = e
    setYValue(clientY)
    setXValue(clientX)
  }

  return (
    <myContext.Consumer>
      {context => (
        <div onMouseMove={e => trackMouse(e)}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            setCursorElement={context.setCursorElement}
          />
          <GlobalStyle />
          <CustomCursor
            xValue={xValue}
            yValue={yValue}
            cursorElement={context.cursorElement}
          />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
