import React, { useEffect } from "react"
import { white, black } from '../variables'
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/contact/mauiMap"
import OahuMap from "../components/contact/oahuMap"
import MapToggle from "../components/contact/mapToggle"
import { AnimatePresence, motion } from 'framer-motion'
import { useToggle } from '../hooks'

const ContactPage = () => {
  const [showOahuMap, toggleOahuMap] = useToggle()
  const [showMapToggle, toggleMap] = useToggle(true)

  useEffect(() => {
    console.log(showMapToggle)
  }, [showMapToggle])

  return (
    <>
      <SEO title="Contact" />
      <MapContainer>
        <button className="select-location-toggle" onClick={toggleMap}>Select Location</button>

        <AnimatePresence exitBeforeEnter>
          {showMapToggle &&
            <MapToggle
              showOahuMap={showOahuMap}
              toggleOahuMap={toggleOahuMap}
              showMapToggle={showMapToggle}
              toggleMap={toggleMap}
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
          animate={{ x: 0, opacity: 1, transition: { delay: 0.8 } }}
        >info@saedesign.com</motion.a>
      </MapContainer>
    </>
  )
}

export default ContactPage

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .select-location-toggle{
    position: absolute;
    top: 80px;
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
