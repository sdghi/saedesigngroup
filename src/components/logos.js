import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, ImageContainer } from "../elements"
import { breakpointSmall } from "../variables"
import styled from "styled-components"
import Popup from "../components/popup"

const Logos = () => {
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
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  link_to_project {
                    document {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const logosData = data.allPrismicLogos.edges[0].node.data.body

  const [showLightbox, setShowLightbox] = useState(false)

  return (
    <LogosContainer padding="0 5%" paddingMd="0 15%">
      {logosData.map(logo => (
        <div key={logo.id} onClick={() => setShowLightbox(true)}>
          <ImageContainer
            alt={logo.primary.logo_image.alt}
            fluid={logo.primary.logo_image.localFile.childImageSharp.fluid}
            heightMd="300px"
          />
        </div>
      ))}
      {showLightbox && (
        <Popup showPopup={showLightbox} setShowPopup={setShowLightbox} />
      )}
    </LogosContainer>
  )
}

export default Logos

const LogosContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${breakpointSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
