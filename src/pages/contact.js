import React, { useState, useEffect, useContext } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/mauiMap"
import OahuMap from "../components/oahuMap"
import MapToggle from "../components/mapToggle"
import { myContext } from "../provider"

const ContactPage = () => {
  const [showOahuMap, setShowOahuMap] = useState(true)
  const [showMapToggle, setShowMapToggle] = useState(true)

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="Contact" />
      <MapContainer>
        {showMapToggle &&
          <MapToggle
            setShowOahuMap={setShowOahuMap}
            showOahuMap={showOahuMap}
            showMapToggle={showMapToggle}
            setShowMapToggle={setShowMapToggle}
          />
        }
        <div>
          {showOahuMap ? (
            <OahuMap showOahuMap={showOahuMap} />
          ) : (
              <MauiMap showOahuMap={showOahuMap} />
            )}
        </div>
      </MapContainer>
    </Layout>
  )
}

export default ContactPage

const MapContainer = styled.div`
  height: calc(100vh - 7vh);
  width: 100%;
  overflow: hidden;
`
