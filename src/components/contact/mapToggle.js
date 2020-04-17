import React from "react"
import styled from "styled-components"
import { white, black, pink } from "../../variables"
import { motion } from 'framer-motion'
import { useCursorChange } from '../../hooks'

const MapToggle = ({
  toggleOahuMap,
  showOahuMap,
  toggleMap,
}) => {
  const [bind] = useCursorChange({ selected: 'selected' })

  const containerVariants = {
    initial: {
      scale: 0,
      transformOrigin: "top left",
    },
    open: {
      scale: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1,
      }
    },
    exit: {
      scale: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        staggerDirection: -1,
      }
    }
  }

  const fadeVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring"
      }
    },
    closed: {
      x: -10,
      opacity: 0
    }
  }

  const oahuGoogleMap = "https://www.google.com/maps/place/555+South+St+%23+108,+Honolulu,+HI+96813/@21.3010374,-157.8602161,19.86z/data=!4m5!3m4!1s0x7c006e0bd43706f7:0x8fb115c33548023e!8m2!3d21.301411!4d-157.8602513";

  const mauiGoogleMap = "https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225";

  return (
    <MapToggleContainer
      variants={containerVariants}
      className="select_container"
      initial="initial"
      animate="open"
      exit="exit"
    >
      <motion.button
        variants={fadeVariants}
        initial="closed"
        open="open"
        exit="closed"
        onClick={toggleMap}>
        <span className="x-icon"></span>
      </motion.button>

      <motion.h5
        variants={fadeVariants}
        initial="closed"
        open="open"
        exit="closed"
      >Choose Location</motion.h5>

      <motion.div
        variants={fadeVariants}
        initial="closed"
        open="open"
        exit="closed"
        id="map_select">
        <div
          className="map_btns"
          onClick={showOahuMap ? toggleOahuMap : undefined}
          onKeyDown={showOahuMap ? toggleOahuMap : undefined}
          role="button"
          tabIndex={0}
          {...bind}
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
          onClick={!showOahuMap ? toggleOahuMap : undefined}
          onKeyDown={!showOahuMap ? toggleOahuMap : undefined}
          role="button"
          tabIndex={0}
          {...bind}
        >
          <h1
            style={!showOahuMap ? { color: "grey" } : { color: "black" }}
            className="uppercase"
          >
            oahu
          </h1>
        </div>
      </motion.div>

      {showOahuMap ? (
        <motion.div
          className="info"
          id="oahu_info"
          variants={fadeVariants}
          initial="closed"
          open="open"
          exit="closed"
        >
          <a href="tel:808-544-0002">(808) 544-0002</a>
          <br />
          <a href={oahuGoogleMap}>
            555 South St Suite #108
          <br /> Honolulu, HI 96813
          </a>
        </motion.div>
      ) : (
          <motion.div
            className="info"
            variants={fadeVariants}
            initial="closed"
            open="open"
            exit="closed"
          >
            <a href="tel:808-249-2200">(808) 249-2200</a>
            <br />
            <a href={mauiGoogleMap}>
              2261 Aupuni St # 101
              <br /> Wailuku, HI 96793
          </a>
          </motion.div >
        )}
    </MapToggleContainer >
  )
}

export default MapToggle

const MapToggleContainer = styled(motion.div)`
  margin: 80px 10px 0 10px;
  background: ${white};
  height: fit-content;
  width: fit-content;
  padding: 20px;
  box-sizing: content-box;
  z-index: 100;
  position: absolute;

  h5 {
    text-align: center;
  }

  button {
    position: absolute;
    left: 20px;
    top: 20px;
    background: none;
    border: none;

    &:focus {
      outline: none;
    }

    .x-icon {
      position: absolute;
      top: 0;
      left: 0;
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

    h1 {
      font-size: 3rem;
      margin: 0;
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
