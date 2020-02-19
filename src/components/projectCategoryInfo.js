import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
                  url
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
                    <img src={logo.logo.url} alt={logo.logo.alt} />
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
    align-items: flex-end;
    justify-content: space-between;
  }

  @media (min-width: ${breakpointSmall}) {
    .hotel-logos {
      width: 60%;
    }
  }
`