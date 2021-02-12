import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectsFilter from "./projectsFilter"
import styled from "styled-components"
import { black, white, yellow, breakpointSmall } from "../../variables"
import { useToggle } from "../../hooks"

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
      <button className="show-filters-btn" onClick={toggleFilters}>
        {showFilters ? "Close Filters" : "View Flters"}
      </button>
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="filters-container"
          >
            <ProjectsFilter
              projectCategoryFilter={projectCategoryFilter}
              setProjectCategoryFilter={setProjectCategoryFilter}
              setDisplayProjectsGrid={setDisplayProjectsGrid}
              displayProjectsGrid={displayProjectsGrid}
              setShowLogos={setShowLogos}
              showLogos={showLogos}
              showMobile={showMobile}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
    border: 2px solid ${black};
    padding: 10px;
    background: ${yellow};
    border-radius: 10px;
    font-weight: 700;
  }

  .filters-container {
    background: ${white};
    padding: 10px 20px;
    border-radius: 10px;
  }

  @media (min-width: ${breakpointSmall}) {
    display: none;
  }
`
