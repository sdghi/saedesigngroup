import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import MauiMap from "../components/mauiMap"
import OahuMap from "../components/oahuMap"
import MapToggle from "../components/mapToggle"
import { useSpring, animated, interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"

const ContactPage = () => {
  const [showOahuMap, setShowOahuMap] = useState(true)
  const [showMapToggle, setShowMapToggle] = useState(true)

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(
    ({ movement: [mx, my] }) => {
      // Turn 0 into mx or my to not center the map on drag
      set({ x: mx, y: my })
    },
    { bounds: { left: -200, right: 200, top: -200, bottom: 200 } }
  )

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
        <animated.div
          {...bind()}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0px)`
            ),
          }}
        >
          {showOahuMap ? (
            <OahuMap showOahuMap={showOahuMap} />
          ) : (
            <MauiMap showOahuMap={showOahuMap} />
          )}
        </animated.div>
      </MapContainer>
    </Layout>
  )
}

export default ContactPage

const MapContainer = styled(animated.div)`
  height: calc(100vh - 7vh);
  width: 100%;
  overflow: hidden;
`
