import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    <section>
      <Video autoPlay muted loop playsInline src={video.url} />
    </section>
  )
}

export default HomeHero

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: brightness(0.9);
`
