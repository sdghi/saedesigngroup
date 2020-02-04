import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { white, black, pink } from "../variables"

const MapToggle = ({
  setShowOahuMap,
  showOahuMap,
  showMapToggle,
  setShowMapToggle,
}) => {
  const fadeMaui = useSpring({
    opacity: !showOahuMap ? 1 : 0,
  })

  const fadeOahu = useSpring({
    opacity: showOahuMap ? 1 : 0,
  })

  const setMapToggle = useSpring({
    opacity: showMapToggle ? 1 : 0,
    config: {
      duration: 300,
      mass: 2,
    },
  })

  return (
    <MapToggleContainer className="select_container" style={setMapToggle}>
      <button onClick={() => setShowMapToggle(false)}>close</button>

      <h5>Choose Location</h5>
      <div id="map_select">
        <div
          className="map_btns"
          onClick={() => {
            setShowOahuMap(false)
          }}
        >
          <h1
            className="uppercase"
            style={!showOahuMap ? { color: "black" } : { color: "grey" }}
          >
            maui
          </h1>
        </div>
        <span className="or">or</span>
        <div
          className="map_btns"
          onClick={() => {
            setShowOahuMap(true)
          }}
        >
          <h1
            style={!showOahuMap ? { color: "grey" } : { color: "black" }}
            className="uppercase"
          >
            oahu
          </h1>
        </div>
      </div>

      {!showOahuMap ? (
        <animated.div className="info" style={fadeMaui}>
          <a href="tel:808-249-2200">(808) 249-2200</a>
          <br />
          <a
            href="https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225"
            target="_blank"
            rel="noopener noreferrer"
          >
            2261 Aupuni St # 101
            <br /> Wailuku, HI 96793
          </a>
        </animated.div>
      ) : (
        <animated.div className="info" id="oahu_info" style={fadeOahu}>
          <a href="tel:808-249-2200">(808) 249-2200</a>
          <br />
          <a
            href="https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* INSERT THE CORRECT ADRESS FOR OAHU */}
            2261 Aupuni St # 101
            <br /> Wailuku, HI 96793
          </a>
        </animated.div>
      )}
    </MapToggleContainer>
  )
}

export default MapToggle

const MapToggleContainer = styled(animated.div)`
  margin: 10px;
  background: ${white};
  height: fit-content;
  padding: 20px;
  width: calc(100% - 20px);
  position: relative;
  z-index: 100;
  position: fixed;

  h5 {
    text-align: center;
  }

  button {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  #map_select {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 3rem;
      margin: 0;
      cursor: pointer;
    }
  }

  .info {
    margin-top: 30px;

    a {
      color: ${black};
    }
  }

  #oahu_info {
    text-align: right;
  }

  @media (min-width: 768px) {
    height: fit-content;
    width: fit-content;
    padding: 30px;

    h5 {
      margin: 0;
    }

    span {
      margin: 0 20px;
    }

    button {
      display: none;
    }

    .info {
      margin-top: 15px;

      a:hover {
        color: ${pink};
      }
    }
  }
`
