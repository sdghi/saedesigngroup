import React, { useContext, useEffect } from "react"
import { myContext } from "../../provider"
import { Cursor, ImageContainer } from "../../elements"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const BrandingCursor = ({ xValue, yValue }) => {
  const context = useContext(myContext)

  const { currentImageIndex, setTotalFilterImages } = context

  const data = useStaticQuery(graphql`
    {
      allPrismicProjectTemplate(
        filter: {
          data: {
            categories: {
              elemMatch: { category: { slug: { eq: "branding" } } }
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
    setTotalFilterImages(totalCount)

    console.log(
      imagesArr.map(img => {
        console.log(
          "img",
          img.node.data.featured_image.alt,
          img.node.data.featured_image.localFile.childImageSharp.fluid
        )
      })
    )
  }, [setTotalFilterImages])

  return (
    <Branding top={yValue} left={xValue} height="450" width="300" zIndex="0">
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
    </Branding>
  )
}

export default BrandingCursor

const Branding = styled(Cursor)`
  overflow: hidden;
`
