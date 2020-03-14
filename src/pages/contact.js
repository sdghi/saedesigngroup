import React, { useState, useEffect, useContext } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/contact/mauiMap"
import OahuMap from "../components/contact/oahuMap"
import MapToggle from "../components/contact/mapToggle"
import { myContext } from "../provider"
import TransitionWrapper from '../components/transitionWrapper'

const ContactPage = () => {
  const [showOahuMap, setShowOahuMap] = useState(true)
  const [showMapToggle, setShowMapToggle] = useState(true)

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <TransitionWrapper>
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
      </TransitionWrapper>
    </Layout >
  )
}

export default ContactPage

const MapContainer = styled.div`
  height: calc(100vh - 7vh);
  width: 100%;
  overflow: hidden;
`
