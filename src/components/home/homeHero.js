import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { pink } from "../../variables"
import styled from "styled-components"

const HomeHero = () => {
  const { allPrismicHomepage: homepage } = useStaticQuery(
    graphql`
      query MyQuery {
        allPrismicHomepage {
          edges {
            node {
              data {
                video {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  const { video } = homepage.edges[0].node.data

  return (
    <Hero>
      <Video autoPlay muted loop playsInline src={video.url} />
      <ScrollCta>scroll down</ScrollCta>
    </Hero>
  )
}

export default HomeHero

const Hero = styled.section`
  position: relative;
`

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const ScrollCta = styled.p`
  position: absolute;
  bottom: 46px;
  right: 0;
  writing-mode: vertical-lr;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 5px);
    left: calc(50% - 3px);
    width: 3px;
    height: 38px;
    background: black;
    animation: bob 2s ease-in-out infinite;
    transform-origin: top;
    background: ${pink};
  }

  @keyframes bob {
    0% {
      transform: scaleY(0);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
  }
`
