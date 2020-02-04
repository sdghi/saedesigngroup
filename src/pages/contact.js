import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/mauiMap"
import OahuMap from "../components/oahuMap"
import MapToggle from "../components/mapToggle"

const ContactPage = () => {
  const [showOahuMap, setShowOahuMap] = useState(true)
  const [showMapToggle, setShowMapToggle] = useState(true)

  return (
    <Layout>
      <SEO title="Contact" />
      <MapContainer>
        <MapToggle
          setShowOahuMap={setShowOahuMap}
          showOahuMap={showOahuMap}
          showMapToggle={showMapToggle}
          setShowMapToggle={setShowMapToggle}
        />
        {showOahuMap ? (
          <OahuMap showOahuMap={showOahuMap} />
        ) : (
          <MauiMap showOahuMap={showOahuMap} />
        )}
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
