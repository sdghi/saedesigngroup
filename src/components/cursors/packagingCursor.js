import React, { useContext, useEffect } from "react"
import { myContext } from "../../provider"
import { Cursor, ImageContainer } from "../../elements"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const PackagingCursor = ({ xValue, yValue }) => {
  const context = useContext(myContext)

  const { currentImageIndex, setTotalFilterImages } = context

  const data = useStaticQuery(graphql`
    {
      allPrismicProjectTemplate(
        filter: {
          data: {
            categories: {
              elemMatch: { category: { slug: { eq: "packaging" } } }
            }
          }
        }
      ) {
        totalCount
        edges {
          node {
            data {
              featured_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      src
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

  const imagesArr = data.allPrismicProjectTemplate.edges
  const { totalCount } = data.allPrismicProjectTemplate

  useEffect(() => {
    // Has to be -1 for the cursor index
    setTotalFilterImages(totalCount - 1)

    console.log({ currentImageIndex })
  }, [setTotalFilterImages, currentImageIndex])

  return (
    <Packaging top={yValue} left={xValue} height="450" width="300" zIndex="0">
      {imagesArr.map(
        (img, index) =>
          currentImageIndex === index && (
            <ImageContainer
              key={index}
              fluid={
                img.node.data.featured_image.localFile.childImageSharp.fluid
              }
              alt={img.node.data.featured_image.alt}
              objectFit="contain"
              height="100%"
              heightMd="100%"
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
