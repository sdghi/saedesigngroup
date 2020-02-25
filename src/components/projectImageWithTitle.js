import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall } from "../variables"
import { ImageContainer } from "../elements"

const ProjectImageWithTitle = ({
  project,
  projectCategoryFilter,
  displayProjectsGrid,
  setCursorElement,
  totalProjects,
}) => {
  const [showProject, setShowProject] = useState(false)

  const slug = project.node.uid
  const categories = project.node.data.categories
  const projectName = project.node.data.project_name.text
  const imageSrc =
    project.node.data.featured_image.localFile.childImageSharp.fluid
  const imageAlt = project.node.data.featured_image.alt

  const { grid_column, top, left, right, bottom } = project.node.data

  useEffect(() => {
    // Reset to false in case it changes
    setShowProject(false)
    categories.map(category => {
      // Show project if the category matches the project filter
      // If it's all show all the projects
      if (projectCategoryFilter.toLowerCase() === category.category.slug) {
        setShowProject(true)
      } else if (projectCategoryFilter === "all") {
        setShowProject(true)
      }

      return null
    })
  }, [projectCategoryFilter, categories])

  return (
    <>
      {showProject && (
        <ProjetContainer
          key={project.uid}
          displayProjectsGrid={displayProjectsGrid}
          onMouseOver={() => setCursorElement({ selected: "selected" })}
          onMouseLeave={() => setCursorElement({ initial: "initial" })}
          // Adjust sizes of non grid according to cms
          heightMd={displayProjectsGrid ? "300px" : `${400 * 1}px`}
          widthMd={displayProjectsGrid ? "100%" : `${60 * 1}%`}
          // Top, Left, Bottom and Right will be directly affected by their properties in the cms
          top={displayProjectsGrid ? "0" : top * 5}
          left={displayProjectsGrid ? "0" : left * 5}
          right={displayProjectsGrid ? "0" : right * 5}
          bottom={displayProjectsGrid ? "0" : bottom * 5}
          // Subtract 1 so that if its the 1st column it will start at margin 0
          gridColumn={grid_column - 1}
          // Total width of allProjectsContainer / total number of columns
          // Container is 70% wide with 5 columns
          columnIncrements={70 / 5}
        >
          <Link to={`/${slug}`}>
            <ImageContainer
              width="100%"
              widthMd="100%"
              heightMd="100%"
              fluid={imageSrc}
              alt={imageAlt}
            />
            <h2>{projectName}</h2>
          </Link>
        </ProjetContainer>
      )}
    </>
  )
}

export default ProjectImageWithTitle

const ProjetContainer = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  width: 100%;

  h2 {
    color: white;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    font-size: 2rem;
    text-transform: uppercase;
  }

  ${ImageContainer} {
    filter: brightness(0.95);
  }

  @media (min-width: ${breakpointSmall}) {
    margin-bottom: ${props => (props.displayProjectsGrid ? "0px" : "50px")};
    margin-top: ${props => `${props.top}em`};
    left: ${props => `${props.left}%`};
    right: ${props => `${props.right}%`};
    width: ${props => props.widthMd};
    height: ${props => props.heightMd};
    margin-left: ${props =>
      props.displayProjectsGrid
        ? "0px"
        : `${props.gridColumn * props.columnIncrements}%`};
  }
`
