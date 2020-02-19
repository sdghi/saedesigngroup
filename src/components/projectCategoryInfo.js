import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    }
  `)

  return (
    <>
      {data.allPrismicCategory.edges.map(item => {
        const id = item.node.id
        const { category, description, logos } = item.node.data
        console.log(category, description, logos)

        if (projectCategoryFilter === category) {
          return (
            <CategoryInfo key={id}>
              <h2>{category}</h2>
              <p>{description.text}</p>
              {logos && <p>has logos</p>}
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
`
