import React, { useEffect, useRef } from 'react'
import HeroTextFilterItem from "./heroTextFilterItem"
import styled from 'styled-components'
import { breakpointSmall, breakpointMedium, pink, yellow } from '../variables'

const HomeHeroSection = ({ setCursorElement, setStartScroll, setProjectCategoryFilter, setShowLogos, setScrollWindowHeight }) => {

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
                    setCursorElement={setCursorElement}
                    setStartScroll={setStartScroll}
                    setProjectCategoryFilter={setProjectCategoryFilter}
                    setShowLogos={setShowLogos}
                />
                ,{" "}
                <HeroTextFilterItem
                    filterValue="packaging"
                    newCursorElement="packaging"
                    content="packaging"
                    setCursorElement={setCursorElement}
                    setStartScroll={setStartScroll}
                    setProjectCategoryFilter={setProjectCategoryFilter}
                    setShowLogos={setShowLogos}
                />{" "}
                design (and more) by good people
        </HeroText>
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