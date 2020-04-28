import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { breakpointSmall, breakpointMedium } from "../../variables"
import styled from "styled-components"
import { AnimatePresence, motion } from 'framer-motion'

const ProjectCategoryInfo = ({ projectCategoryFilter }) => {
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

  const variants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "circOut",
        duration: 0.3
      }
    }
  }

  return (
    <>
      {data.allPrismicCategory.edges.map(item => {
        const id = item.node.id
        const { category, description, logos } = item.node.data

        if (projectCategoryFilter.toLowerCase() === category.toLowerCase()) return (
          <CategoryInfo key={id}>
            <h2>{category}</h2>
            <p>{description.text}</p>
            <AnimatePresence>
              {logos.length > 1 && (
                <motion.div className="hotel-logos" variants={variants} initial="hidden" animate="visible" exit="hidden">
                  {logos.map((logo, i) => (
                    <img key={i} src={logo.logo.url} alt={logo.logo.alt} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </CategoryInfo>
        )

      })}
    </>
  )
}

export default ProjectCategoryInfo

const CategoryInfo = styled(motion.div)`
  text-align: center;
  margin-bottom: 112px;
  width: 100%;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    max-width: 550px;
    margin: 0 auto;
  }

  .hotel-logos {
    margin: 50px auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    grid-gap: 20px;

    img {
      width: 75px;
    }
  }

  @media (min-width: ${breakpointSmall}) {
    .hotel-logos {
      width: 70%;
      display: flex;
      justify-content: space-between;

      img {
        width: 100px;
      }
    }
  }

  @media (min-width: ${breakpointMedium}) {
    .hotel-logos {
      img {
        width: 200px;
      }
    }
  }
`
