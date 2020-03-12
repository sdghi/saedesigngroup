import React, { useState } from "react"
import ProjectsFilter from "./projectsFilter"
import styled from "styled-components"
import { breakpointSmall } from "../../variables"

const MobileProjectFilter = ({
  projectCategoryFilter,
  setProjectCategoryFilter,
  setDisplayProjectsGrid,
  displayProjectsGrid,
  setShowLogos,
  showLogos,
  showMobile,
}) => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <MobileContainer>
      <button
        className="show-filters-btn"
        onClick={() => setShowFilters(!showFilters)}
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
