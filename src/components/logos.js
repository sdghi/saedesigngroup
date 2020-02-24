import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, ImageContainer } from "../elements"
import { breakpointSmall } from "../variables"
import styled from "styled-components"

const Logos = ({ setCursorElement }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicLogos {
        edges {
          node {
            data {
              body {
                primary {
                  title {
                    text
                  }
                  logo_image {
                    alt
                    localFile {
                      childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  # link_to_project {
                  #   document {
                  #     uid
                  #   }
                  # }
                }
              }
            }
          }
        }
      }
    }
  `)

  const logosData = data.allPrismicLogos.edges[0].node.data.body

  return (
    <LogosContainer padding="0 5%" paddingMd="0 15%">
      {logosData.map(logo => (
        <div
          role="button"
          key={logo.id}
          // Move this to the open project button once it is added
          onMouseOver={() => setCursorElement({ selected: "selected" })}
          onMouseLeave={() => setCursorElement({ initial: "initial" })}
        >
          <ImageContainer
            alt={logo.primary.logo_image.alt}
            fluid={logo.primary.logo_image.localFile.childImageSharp.fluid}
            heightMd="300px"
          />
        </div>
      ))}
    </LogosContainer>
  )
}

export default Logos

const LogosContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  ${ImageContainer} {
    filter: grayscale(100%);
    transition: all 0.15s ease-out;

    &:hover {
      transition: all 0.2s ease-in;
      filter: grayscale(0);
    }
  }

  @media (min-width: ${breakpointSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
