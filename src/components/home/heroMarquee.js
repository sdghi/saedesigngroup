import React from "react"
import styled from "styled-components"

const HeroMarquee = () => {
  return (
    <>
      <Marquee>
        <div className="inner" aria-hidden="true">
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
          <div>Delightful&nbsp;Design&nbsp;By&nbsp;Good&nbsp;People</div>
        </div>
      </Marquee>
    </>
  )
}

export default HeroMarquee

const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  position: relative;

  .inner {
    position: relative;
    animation: marquee 20s linear infinite both;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
    width: fit-content;

    div {
      font-size: 72px;
      font-weight: 700;
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(calc(-25% + 20vw), 0, 0);
    }

    100% {
      transform: translate3d(calc(-50% + 20vw), 0, 0);
    }
  }
`
