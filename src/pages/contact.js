import React, { useState, useEffect, useContext } from "react"
import { breakpointSmall, white } from '../variables'
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/contact/mauiMap"
import OahuMap from "../components/contact/oahuMap"
import MapToggle from "../components/contact/mapToggle"
import { myContext } from "../provider"
import TransitionWrapper from '../components/wrappers/transitionWrapper'

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
          <button className="select-location-toggle" onClick={() => setShowMapToggle(true)}>Select Location</button>
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
  position: relative;

  .select-location-toggle{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 20;
    padding: 20px 10px;
    background: ${white};
    border: none;
    font-size: 16px;
    font-weight: 700;
    outline: none;
  }
  
`
