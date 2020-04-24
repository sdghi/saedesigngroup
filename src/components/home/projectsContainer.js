import React from 'react'
import styled from 'styled-components'
import { breakpointSmall } from '../../variables'
import { Container } from '../../elements'
import ProjectTile from './projectTile'

const ProjectsContainer = ({
    showLogos,
    displayProjectsGrid,
    measuredRef,
    projects,
    projectCategoryFilter,
    elTop,
    setCursorElement
}) => {

    if (!showLogos) return (
        <AllProjects
            display={displayProjectsGrid ? "grid" : "block"}
            padding="0 5%"
            margin="0"
            marginMd="0"
            paddingMd={displayProjectsGrid ? '0 10%' : '0'}
            ref={measuredRef}
        >
            {projects.map(project => (
                <ProjectTile
                    displayProjectsGrid={displayProjectsGrid}
                    key={project.node.uid}
                    project={project}
                    projectCategoryFilter={projectCategoryFilter}
                    setCursorElement={setCursorElement}
                    totalProjects={projects.length}
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
    display: ${({ display }) => display};
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 80px;
    overflow-x: hidden;
  }
`