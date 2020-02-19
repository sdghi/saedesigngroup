import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ImageContainer } from "../elements"
import { breakpointSmall } from "../variables"
import styled from "styled-components"

const ProjectCategoryInfo = ({ projectCategoryFilter }) => {
  console.log("project category filter", projectCategoryFilter)

  const data = useStaticQuery(graphql`
    {
      allPrismicCategory {
        edges {
          node {
            data {
              category
              description {
                text
              }
              logos {
                logo {
                  alt
                  localFile {
                    childImageSharp {
                      fluid {
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

  return (
    <>
      {data.allPrismicCategory.edges.map(item => {
        const id = item.node.id
        const { category, description, logos } = item.node.data

        if (projectCategoryFilter === category) {
          return (
            <CategoryInfo key={id}>
              <h2>{category}</h2>
              <p>{description.text}</p>
              {logos.length > 1 && (
                <div className="hotel-logos">
                  {logos.map((logo, i) => (
                    <ImageContainer
                      height="50px"
                      heightMd="100px"
                      width="50px"
                      widthMd="100px"
                      key={i}
                      alt={logo.logo.alt}
                      fluid={logo.logo.localFile.childImageSharp.fluid}
                    />
                  ))}
                </div>
              )}
            </CategoryInfo>
          )
        }

        return null
      })}
    </>
  )
}

export default ProjectCategoryInfo

const CategoryInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;
  width: 100%;

  .hotel-logos {
    margin: 50px auto;
    width: 90%;
    display: flex;

    div {
      border-radius: 50%;
    }
  }

  @media (min-width: ${breakpointSmall}) {
    .hotel-logos {
      width: 60%;
    }
  }
`
