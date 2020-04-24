import React from "react"
import ProjectsFilter from "./projectsFilter"
import styled from "styled-components"
import { breakpointSmall, white } from "../../variables"
import { useToggle } from '../../hooks'

const MobileProjectFilter = ({
  projectCategoryFilter,
  setProjectCategoryFilter,
  setDisplayProjectsGrid,
  displayProjectsGrid,
  setShowLogos,
  showLogos,
  showMobile,
}) => {
  const [showFilters, toggleFilters] = useToggle()

  return (
    <MobileContainer>
      <button
        className="show-filters-btn"
        onClick={toggleFilters}
      >
        {showFilters ? "close filters" : "view filters"}
      </button>
      {showFilters && (
        <ProjectsFilter
          projectCategoryFilter={projectCategoryFilter}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setDisplayProjectsGrid={setDisplayProjectsGrid}
          displayProjectsGrid={displayProjectsGrid}
          setShowLogos={setShowLogos}
          showLogos={showLogos}
          showMobile={showMobile}
        />
      )}
    </MobileContainer>
  )
}

export default MobileProjectFilter

const MobileContainer = styled.div`
  position: sticky;
  width: fit-content;
  justify-content: space-between;
  top: 9vh;
  z-index: 100;

  .show-filters-btn {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: ${breakpointSmall}) {
    display: none;
  }
`
