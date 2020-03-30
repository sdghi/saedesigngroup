import React, { useState, useEffect, useContext } from "react"
import { white, black } from '../variables'
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/contact/mauiMap"
import OahuMap from "../components/contact/oahuMap"
import MapToggle from "../components/contact/mapToggle"
import { myContext } from "../provider"
import { AnimatePresence, motion } from 'framer-motion'

const ContactPage = () => {
  const [showOahuMap, setShowOahuMap] = useState(true)
  const [showMapToggle, setShowMapToggle] = useState(true)

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <>
      <SEO title="Contact" />
      <MapContainer>
        <button className="select-location-toggle" onClick={() => setShowMapToggle(true)}>Select Location</button>
        <AnimatePresence>
          {showMapToggle &&
            <MapToggle
              setShowOahuMap={setShowOahuMap}
              showOahuMap={showOahuMap}
              showMapToggle={showMapToggle}
              setShowMapToggle={setShowMapToggle}
            />
          }

        </AnimatePresence>

        <div>
          {showOahuMap ? (
            <OahuMap showOahuMap={showOahuMap} />
          ) : (
              <MauiMap showOahuMap={showOahuMap} />
            )}
        </div>


        <motion.a
          href="mailto: info@saedesign.com"
          className="contact-us-at"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
        >info@saedesign.com</motion.a>
      </MapContainer>
    </>
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
  

  .contact-us-at{
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 20px;
    background: ${white};
    font-size: 1.2rem;
    font-weight: 700;
    color: ${black};
  }
`
