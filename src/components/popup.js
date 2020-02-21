import React, { useEffect } from "react"
import styled from "styled-components"
import { ImageContainer } from "../elements"

const Popup = ({ showPopup, setShowPopup, lightBoxImage }) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setShowPopup(false)
    })
  }, [showPopup, setShowPopup])

  return (
    <PopupContainer>
      <div className="popup-content">
        <button onClick={() => setShowPopup(false)}>close</button>
        <ImageContainer
          alt={lightBoxImage.primary.logo_image.alt}
          fluid={
            lightBoxImage.primary.logo_image.localFile.childImageSharp.fluid
          }
          width="100%"
          widthMd="100%"
          maxWidth="1200px"
          height="100%"
          heightMd="100%"
          objectFit="contain"
        />
      </div>
    </PopupContainer>
  )
}

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;

  .popup-content {
    position: relative;
    width: 80%;
    max-width: 1200px;
    height: fit-content;

    button {
      position: absolute;
      top: -50px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
    }
  }
`

export default Popup
