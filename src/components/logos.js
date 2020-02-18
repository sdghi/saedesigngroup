import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, ImageContainer } from "../elements"
import { breakpointSmall } from "../variables"
import styled from "styled-components"

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
  console.log("logos data", logosData)

  return (
    <LogosContainer padding="0 5%" paddingMd="0 15%">
      {logosData.map(logo => {
        console.log(
          "logos",
          logo.primary.logo_image.localFile.childImageSharp.fluid
        )
        return (
          <ImageContainer
            alt={logo.primary.logo_image.alt}
            fluid={logo.primary.logo_image.localFile.childImageSharp.fluid}
          />
        )
      })}
    </LogosContainer>
  )
}

export default Logos

const LogosContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${breakpointSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    .fjTCnV {
      height: 300px;
    }
  }
`
