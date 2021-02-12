import React from "react"
import styled from "styled-components"
import { breakpointSmall, breakpointMedium, black, pink } from "../../variables"
import { useStaticQuery, graphql } from "gatsby"
import { useCursorChange } from "../../hooks"

const ProjectsFilter = ({
  projectCategoryFilter,
  setProjectCategoryFilter,
  setShowLogos,
  showLogos,
  showMobile,
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

  const [bind] = useCursorChange({ selected: "selected" })

  const filteredCategories = categories.filter(
    category => category.node.data.category !== "Logos"
  )

  return (
    <FilterContainer showMobile={showMobile}>
      <div className="filter-categories">
        <div>
          <button
            className={projectCategoryFilter === "all" ? "selected" : null}
            onClick={() => handleClickEvent("all")}
            onKeyDown={() => handleClickEvent("all")}
            {...bind}
          >
            all
          </button>

          {filteredCategories.map((category, index) => (
            <button
              className={
                projectCategoryFilter.toLowerCase() ===
                category.node.data.category.toLowerCase()
                  ? "selected"
                  : null
              }
              key={index}
              onClick={() => handleClickEvent(category.node.data.category)}
              onKeyDown={() => handleClickEvent(category.node.data.category)}
              {...bind}
            >
              {category.node.data.category}
            </button>
          ))}
          <button
            className={showLogos ? "selected" : null}
            onClick={() => handleClickEvent("Logos", true)}
            {...bind}
          >
            logos
          </button>
        </div>
      </div>
    </FilterContainer>
  )
}

export default ProjectsFilter

const FilterContainer = styled.div`
  position: sticky;
  width: fit-content;
  justify-content: space-between;
  z-index: 100;
  top: 9vh;
  padding: 0 20px;
  display: ${({ showMobile }) => (showMobile === true ? "flex" : "none")};

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
        line-height: 1.5;
        text-transform: uppercase;
        color: ${black};
        letter-spacing: 0.1em;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 5px;

        &.selected {
          color: ${pink};
        }

        &:hover {
          color: ${pink};
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  .display-btn-container {
    display: none;
  }

  @media (min-width: ${breakpointSmall}) {
    display: ${({ showMobile }) => (showMobile === true ? "none" : "flex")};

    .display-btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      svg {
        fill: ${black};

        &.selected {
          fill: ${pink};
        }
      }
    }
  }

  @media (min-width: ${breakpointMedium}) {
    z-index: 100;
  }
`
