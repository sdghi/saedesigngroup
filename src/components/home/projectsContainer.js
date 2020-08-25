import React from "react"
import styled from "styled-components"
import { AnimateSharedLayout } from "framer-motion"
import { breakpointSmall } from "../../variables"
import { Container } from "../../elements"
import ProjectTile from "./projectTile"

const ProjectsContainer = ({
  showLogos,
  displayProjectsGrid,
  measuredRef,
  projects,
  projectCategoryFilter,
  setProjectCategoryFilter,
  setCursorElement,
  setShowLogos,
}) => {
  if (showLogos) return null

  return (
    <AllProjects
      display={displayProjectsGrid ? "grid" : "block"}
      margin="0 auto"
      marginMd="0 auto"
      paddingMd={displayProjectsGrid ? "0 10%" : "0"}
      ref={measuredRef}
      displayProjectsGrid={displayProjectsGrid}
    >
      {projects.map(project => (
        <ProjectTile
          displayProjectsGrid={displayProjectsGrid}
          key={project.node.uid}
          project={project}
          projectCategoryFilter={projectCategoryFilter}
          setCursorElement={setCursorElement}
          totalProjects={projects.length}
          setShowLogos={setShowLogos}
          setProjectCategoryFilter={setProjectCategoryFilter}
        />
      ))}
    </AllProjects>
  )
}

export default ProjectsContainer

const AllProjects = styled(Container)`
  display: grid;
  grid-gap: 20px;
  width: 95%;
  max-width: 1800px;
  margin: 0 auto;
  grid-template-columns: ${({ displayProjectsGrid }) =>
    displayProjectsGrid && "repeat(auto-fill, minmax(250px, 1fr))"};

  @media (min-width: ${breakpointSmall}) {
    overflow-x: hidden;
    display: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "grid" : "flex"};
    align-items: center;
    grid-gap: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "80px" : "0px"};
    grid-auto-flow: row;
    flex-wrap: wrap;
  }
`
