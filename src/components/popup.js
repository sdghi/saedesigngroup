import React, { useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const Popup = ({ showPopup, setShowPopup }) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setShowPopup(false)
    })
  }, [showPopup, setShowPopup])

  const fadeIn = useSpring({
    opacity: showPopup ? 1 : 0,
  })

  return (
    <PopupContainer
      style={fadeIn}
      onClick={() => setShowPopup(false)}
    ></PopupContainer>
  )
}

const PopupContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`

export default Popup
