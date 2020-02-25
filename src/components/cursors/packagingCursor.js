import React, { useContext } from "react"
import { myContext } from "../../provider"
import { Cursor, ImageContainer } from "../../elements"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const PackagingCursor = ({ xValue, yValue }) => {
  const context = useContext(myContext)

  const { currentImageIndex } = context

  const data = useStaticQuery(graphql`
    query {
      allPrismicCategoryCursor(filter: { uid: { eq: "packaging-cursor" } }) {
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
    <Packaging top={yValue} left={xValue} height="450" width="300" zIndex="0">
      {imagesArr.map(
        (img, index) =>
          currentImageIndex === index && (
            <ImageContainer
              key={index}
              fluid={img.image.localFile.childImageSharp.fluid}
            />
          )
      )}
    </Packaging>
  )
}

export default PackagingCursor

const Packaging = styled(Cursor)`
  overflow: hidden;
`
