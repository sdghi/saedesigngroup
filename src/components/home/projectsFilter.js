import React from "react"
import styled from "styled-components"
import { breakpointSmall, breakpointMedium, black, grey } from "../../variables"
import { useStaticQuery, graphql } from "gatsby"
import { useCursorChange } from '../../hooks'

const ProjectsFilter = ({
  projectCategoryFilter,
  setProjectCategoryFilter,
  setDisplayProjectsGrid,
  displayProjectsGrid,
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

  const [bind] = useCursorChange({ selected: 'selected' });

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

          {categories.map((category, index) => (
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
            onClick={() => handleClickEvent("", true)}
            {...bind}
          >
            logos
          </button>
        </div>
      </div>
      {/* {!showLogos && (
        <div className="display-btn-container">

          {projectCategoryFilter === 'all' &&
            <>
              <GridBtn
                displayProjectsGrid={displayProjectsGrid}
                setDisplayProjectsGrid={setDisplayProjectsGrid}
              />

              <StaggeredBtn
                displayProjectsGrid={displayProjectsGrid}
                setDisplayProjectsGrid={setDisplayProjectsGrid}
              />
            </>
          }

        </div>
      )} */}
    </FilterContainer>
  )
}

export default ProjectsFilter

const FilterContainer = styled.div`
  position: sticky;
  width: fit-content;
  justify-content: space-between;
  top: 9vh;
  padding: 0 20px;
  margin-bottom: 20px;
  display: ${({ showMobile }) => showMobile === true ? "flex" : "none"};

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
        color: ${grey};
        letter-spacing: 0.1em;
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 5px;

        &.selected {
          color: ${black};
        }

        &:hover{
          color: ${black};
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
    display: ${({ showMobile }) => showMobile === true ? "none" : "flex"};
    /* width: 100%; */

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
  }

  @media (min-width: ${breakpointMedium}) {
    z-index: 0;
  }
`

// // Grid Btn
// const GridBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {

//   const [bind] = useCursorChange({ selected: 'selected' });

//   return (
//     <svg
//       className={displayProjectsGrid ? "selected" : null}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       onClick={() => setDisplayProjectsGrid(true)}
//       {...bind}
//     >
//       <path
//         d="M4-185h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-176h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-167h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22Z"
//         transform="translate(-4 185)"
//       />
//     </svg>
//   )
// }

// // Staggered Btn
// const StaggeredBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {

//   const [bind] = useCursorChange({ selected: 'selected' });

//   return (
//     <svg
//       className={!displayProjectsGrid ? "selected" : null}
//       onClick={() => setDisplayProjectsGrid(false)}
//       xmlns="http://www.w3.org/2000/svg"
//       width="23.132"
//       height="24"
//       viewBox="0 0 23.132 24"
//       {...bind}
//     >
//       <g transform="translate(-4 -4)">
//         <rect width="5.337" height="4.801" transform="translate(21.795 4)" />
//         <rect width="15" height="9.526" transform="translate(4 8.801)" />
//         <rect
//           width="11.132"
//           height="7.227"
//           transform="translate(12.785 20.773)"
//         />
//       </g>
//     </svg>
//   )
// }
