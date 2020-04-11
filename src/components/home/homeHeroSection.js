import React, { useEffect, useRef } from 'react'
import HeroTextFilterItem from "./heroTextFilterItem"
import styled from 'styled-components'
import { breakpointSmall, breakpointMedium, pink, yellow } from '../../variables'

const HomeHeroSection = ({ setStartScroll, setProjectCategoryFilter, setShowLogos, setScrollWindowHeight }) => {

  const heroRef = useRef(null)

  useEffect(() => {
    setScrollWindowHeight(heroRef.current.offsetHeight)
  }, [setScrollWindowHeight])


  return (
    <HomeHero ref={heroRef} >
      <HeroText>
        Sae what you mean to sae, with SaeDesignGroup. <br />
        Delightful{" "}
        <HeroTextFilterItem
          filterValue="branding"
          newCursorElement="branding"
          content="branding"
          setStartScroll={setStartScroll}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setShowLogos={setShowLogos}
        />
        ,{" "}
        <HeroTextFilterItem
          filterValue="packaging"
          newCursorElement="packaging"
          content="packaging"
          setStartScroll={setStartScroll}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setShowLogos={setShowLogos}
        />{" "}
        design (and more) by good people
        </HeroText>
      <p className="scroll-cta">scroll down</p>
    </HomeHero>
  )
}

export default HomeHeroSection


const HomeHero = styled.section`
  height: calc(100vh - 7vh);
  width: 100%;
  display: grid;
  place-items: center;
  background: ${yellow};
  position: relative;

  .scroll-cta{
    position: absolute;
    /* height of the :after plus the added top px value  */
    bottom: 45px;
    right: 0;
    writing-mode: vertical-lr;
    font-weight: 700;

    &:after{
      content: '';
      position: absolute;
      top: calc(100% + 5px);
      left: calc(50% - 3px);
      width: 3px; 
      height: 40px;
      background: black;
      animation: bob 2s ease-in-out infinite;
      transform-origin: top;
      background: ${pink};
    }

    @keyframes bob{
     0%{
        transform: scaleY(0);
      }
      50%{
        transform: scaleY(1)
      }
      100%{
        transform: scaleY(0);
      }
    }
  }
`

const HeroText = styled.h1`
  font-size: 24px;
  margin: 0 auto;
  width: fit-content;
  max-width: 1400px;
  font-weight: 300;
  color: ${pink};
  padding: 0 20px;

  strong {
    position: relative;
    z-index: 10;
  }

  @media (min-width: ${breakpointSmall}) {
    font-size: 64px;
    padding: 0 50px;
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: 104px;
  }
`