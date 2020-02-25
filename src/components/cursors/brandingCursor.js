import React, { useContext } from "react"
import { myContext } from "../../provider"
import { Cursor, ImageContainer } from "../../elements"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const BrandingCursor = ({ xValue, yValue }) => {
  const context = useContext(myContext)

  const { currentImageIndex } = context

  const data = useStaticQuery(graphql`
    query {
      allPrismicCategoryCursor(filter: { uid: { eq: "branding-cursor" } }) {
        edges {
          node {
            data {
              cursor_images {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                      }
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

  const imagesArr =
    data.allPrismicCategoryCursor.edges[0].node.data.cursor_images

  return (
    <Branding top={yValue} left={xValue} height="450" width="300" zIndex="0">
      {imagesArr.map(
        (img, index) =>
          currentImageIndex === index && (
            <ImageContainer
              key={index}
              fluid={img.image.localFile.childImageSharp.fluid}
            />
          )
      )}
    </Branding>
  )
}

export default BrandingCursor

const Branding = styled(Cursor)`
  overflow: hidden;
`
