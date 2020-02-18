import React from "react"
import styled from "styled-components"
import { breakpointSmall, black, grey } from "../variables"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsFilter = ({
  projectCategoryFilter,
  setProjectCategoryFilter,
  setDisplayProjectsGrid,
  displayProjectsGrid,
  setShowLogos,
  showLogos,
}) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCategory {
        edges {
          node {
            data {
              category
            }
          }
        }
      }
    }
  `)

  const categories = data.allPrismicCategory.edges

  // Sets project filter and show logo status on click
  const handleClickEvent = (value, showLogo = false) => {
    setProjectCategoryFilter(value)
    setShowLogos(showLogo)
  }

  return (
    <FilterContainer>
      <div className="filter-categories">
        <h3>work</h3>
        <div>
          <button
            className={projectCategoryFilter === "all" && "selected"}
            onClick={() => handleClickEvent("all")}
            onKeyDown={() => handleClickEvent("all")}
          >
            all
          </button>

          {categories.map((category, index) => (
            <button
              className={
                projectCategoryFilter.toLowerCase() ===
                  category.node.data.category.toLowerCase() && "selected"
              }
              key={index}
              onClick={() => handleClickEvent(category.node.data.category)}
              onKeyDown={() => handleClickEvent(category.node.data.category)}
            >
              {category.node.data.category}
            </button>
          ))}
          <button
            className={showLogos && "selected"}
            onClick={() => handleClickEvent("", true)}
          >
            logos
          </button>
        </div>
      </div>
      {!showLogos && (
        <div className="display-btn-container">
          <GridBtn
            displayProjectsGrid={displayProjectsGrid}
            setDisplayProjectsGrid={setDisplayProjectsGrid}
          />
          <StaggeredBtn
            displayProjectsGrid={displayProjectsGrid}
            setDisplayProjectsGrid={setDisplayProjectsGrid}
          />
        </div>
      )}
    </FilterContainer>
  )
}

export default ProjectsFilter

const FilterContainer = styled.div`
  position: sticky;
  width: 100%;
  justify-content: space-between;
  top: 9vh;
  padding: 0 20px;
  display: flex;
  margin-bottom: 20px;
  z-index: 100;

  @media (min-width: ${breakpointSmall}) {
    padding: 0 50px;
  }

  .filter-categories {
    h3 {
      font-size: 24px;
      font-weight: 300;
      margin: 0 0 20px 0;
    }

    div {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        padding: 0;
        background: none;
        border: none;
        font-weight: 900;
        font-size: 18px;
        line-height: 1.5;
        text-transform: uppercase;
        cursor: pointer;
        color: ${grey};

        &.selected {
          color: ${black};
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  .display-btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    svg {
      fill: ${grey};

      &.selected {
        fill: ${black};
      }
    }
  }
`

// Grid Btn
const GridBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {
  return (
    <svg
      className={displayProjectsGrid && "selected"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={() => setDisplayProjectsGrid(true)}
    >
      <path
        d="M4-185h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-176h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-167h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22Z"
        transform="translate(-4 185)"
      />
    </svg>
  )
}

// Staggered Btn
const StaggeredBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {
  return (
    <svg
      className={!displayProjectsGrid && "selected"}
      onClick={() => setDisplayProjectsGrid(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="23.132"
      height="24"
      viewBox="0 0 23.132 24"
    >
      <g transform="translate(-4 -4)">
        <rect width="5.337" height="4.801" transform="translate(21.795 4)" />
        <rect width="15" height="9.526" transform="translate(4 8.801)" />
        <rect
          width="11.132"
          height="7.227"
          transform="translate(12.785 20.773)"
        />
      </g>
    </svg>
  )
}