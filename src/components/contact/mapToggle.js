import React from "react"
import styled from "styled-components"
import { white, black, pink } from "../../variables"
import { motion } from "framer-motion"
import { useCursorChange } from "../../hooks"

const MapToggle = ({ toggleOahuMap, showOahuMap, toggleMap }) => {
  const [bind] = useCursorChange({ selected: "selected" })

  const fadeVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      x: -10,
    },
  }

  const oahuGoogleMap =
    "https://www.google.com/maps/place/555+South+St+%23+108,+Honolulu,+HI+96813/@21.3010374,-157.8602161,19.86z/data=!4m5!3m4!1s0x7c006e0bd43706f7:0x8fb115c33548023e!8m2!3d21.301411!4d-157.8602513"

  const mauiGoogleMap =
    "https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225"

  return (
    <MapToggleContainer
      variants={fadeVariants}
      className="select_container"
      initial="closed"
      animate="open"
      exit="closed"
    >
      <motion.button className="close-menu" onClick={toggleMap}>
        <span className="x-icon"></span>
        <span className="visually-hidden">Close Menu</span>
      </motion.button>

      <motion.h5>Choose Location</motion.h5>

      <motion.div id="map_select">
        <button
          className="btn-reset option-btn"
          style={!showOahuMap ? { color: "black" } : { color: "grey" }}
          onClick={toggleOahuMap}
          {...bind}
        >
          maui
        </button>

        <span className="or">or</span>
        <button
          style={!showOahuMap ? { color: "grey" } : { color: "black" }}
          className="btn-reset option-btn"
          onClick={toggleOahuMap}
          {...bind}
        >
          oahu
        </button>
      </motion.div>

      {showOahuMap ? (
        <motion.div className="info" id="oahu_info">
          <a href="tel:808-544-0002" {...bind}>
            (808) 544-0002
          </a>
          <br />
          <a href={oahuGoogleMap} {...bind}>
            555 South St Suite #108
            <br /> Honolulu, HI 96813
          </a>
        </motion.div>
      ) : (
        <motion.div className="info">
          <a href="tel:808-249-2200" {...bind}>
            (808) 249-2200
          </a>
          <br />
          <a href={mauiGoogleMap} {...bind}>
            2261 Aupuni St # 101
            <br /> Wailuku, HI 96793
          </a>
        </motion.div>
      )}
    </MapToggleContainer>
  )
}

export default MapToggle

const MapToggleContainer = styled(motion.div)`
  margin: 80px 10px 0 10px;
  background: ${white};
  height: fit-content;
  width: fit-content;
  padding: 18px 32px 30px;
  box-sizing: content-box;
  z-index: 100;
  position: absolute;

  h5 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  button {
    position: absolute;
    left: 0px;
    top: 0px;
    background: none;
    border: none;
    padding: 20px;

    &:focus {
      outline: 0;
    }

    .x-icon {
      position: absolute;
      top: calc(50% - 7.5px);
      left: calc(50% - 1px);
      height: 15px;
      width: 2px;
      background: ${black};
      transform: rotate(45deg);

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 15px;
        width: 2px;
        background: ${black};
        transform: rotate(-90deg);
      }
    }
  }

  #map_select {
    display: grid;
    align-items: center;
    place-items: center;
    grid-gap: 10px;
    grid-template-columns: 2fr 0.5fr 2fr;
    opacity: 1;

    .option-btn {
      font-size: 3rem;
      margin: 0;
      position: relative;
      padding: 0;
      font-weight: 700;
    }
  }

  .info {
    margin-top: 30px;

    a {
      font-size: 18px;
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

    .close-menu {
      display: none;
    }

    h5 {
      margin: 0;
    }

    .info {
      margin-top: 15px;

      a:hover {
        color: ${pink};
      }
    }
  }
`
