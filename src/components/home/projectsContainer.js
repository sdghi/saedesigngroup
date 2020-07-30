import React from "react"
import styled from "styled-components"
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
      padding="0 5%"
      margin="0"
      marginMd="0"
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

  @media (min-width: ${breakpointSmall}) {
    overflow-x: hidden;
    display: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "grid" : "flex"};
    grid-template-columns: ${({ displayProjectsGrid }) =>
      displayProjectsGrid && "repeat(auto-fill, minmax(350px, 1fr))"};
    grid-gap: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "80px" : "0px"};
    grid-auto-flow: row;
    flex-wrap: wrap;
  }
`
