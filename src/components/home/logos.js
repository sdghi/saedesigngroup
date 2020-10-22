import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, ImageContainer } from "../../elements"
import { motion } from "framer-motion"
import { breakpointSmall, breakpointMedium, pink } from "../../variables"
import styled from "styled-components"

const Logos = ({ setCursorElement }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicLogos {
        edges {
          node {
            data {
              body {
                ... on PrismicLogosBodyLogo {
                  primary {
                    title {
                      text
                    }
                    logo_image {
                      alt
                      fluid {
                        ...GatsbyPrismicImageFluid
                      }
                    }
                    link_to_project {
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

  const [hoveredLogo, setHoveredLogo] = useState(null)

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }

  return (
    <LogosContainer
      padding="0 5%"
      paddingMd="0 15%"
      hoveredLogo={hoveredLogo}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {logosData.map(logo => (
        <motion.div
          className="logo-container"
          key={logo.id}
          onHoverStart={() => setHoveredLogo(logo.id)}
          onHoverEnd={() => setHoveredLogo(null)}
        >
          <ImageContainer
            alt={logo.primary.logo_image.alt}
            fluid={logo.primary.logo_image.fluid}
            heightMd="300px"
          />
          {logo.primary.link_to_project && (
            <Link
              to={logo.primary.link_to_project.uid}
              className="open-project-link"
              onMouseEnter={() => setCursorElement({ selected: "selected" })}
              onMouseLeave={() => setCursorElement({ initial: "initial" })}
            >
              <button className="full-project-btn">
                full project{" "}
                <img src="viewproject_icon.svg" alt="full project" />{" "}
              </button>
            </Link>
          )}
        </motion.div>
      ))}
    </LogosContainer>
  )
}

export default Logos

const LogosContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  .logo-container {
    position: relative;

    .open-project-link {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }

  .full-project-btn {
    display: flex;
    align-items: center;
    height: 20px;
    width: fit-content;
    background: none;
    border: none;
    padding: 0;
    text-transform: uppercase;
    font-weight: 700;
    color: ${pink};

    img {
      margin-left: 5px;
      height: 10px;
    }
  }

  @media (min-width: ${breakpointSmall}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: ${breakpointMedium}) {
    .logo-container {
      ${ImageContainer} {
        filter: ${({ hoveredLogo }) =>
          hoveredLogo !== null && "grayscale(100%)"};
        transition: all 0.15s ease-out;
      }

      .open-project-link {
        opacity: 0;
        transition: all 0.3s ease-out;
      }

      &:hover {
        ${ImageContainer} {
          transition: all 0.5s ease-in-out;
          filter: grayscale(0);
        }

        .open-project-link {
          opacity: 1;
          transition: all 0.6s ease-out;
        }
      }
    }
  }
`
