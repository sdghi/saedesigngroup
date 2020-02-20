import React, { useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { ImageContainer } from "../elements"

const Popup = ({ showPopup, setShowPopup, lightBoxImage }) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setShowPopup(false)
    })
  }, [showPopup, setShowPopup])

  const fadeIn = useSpring({
    opacity: showPopup ? 1 : 0,
  })

  return (
    <PopupContainer style={fadeIn}>
      <button onClick={() => setShowPopup(false)}>close</button>
      <ImageContainer
        alt={lightBoxImage.primary.logo_image.alt}
        fluid={lightBoxImage.primary.logo_image.localFile.childImageSharp.fluid}
        width="80%"
        widthMd="60%"
        height="400px"
      />
    </PopupContainer>
  )
}

const PopupContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;

  button {
    position: absolute;
    top: 5%;
    left: 5%;
  }
`

export default Popup
