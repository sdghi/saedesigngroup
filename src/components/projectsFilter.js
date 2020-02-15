import React from "react"
import styled from "styled-components"
import { breakpointSmall } from "../variables"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsFilter = ({ setProjectCategoryFilter }) => {
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

  return (
    <FilterContainer>
      <div className="filter-categories">
        <h3>work</h3>
        <ul>
          <li onClick={() => setProjectCategoryFilter("all")}>all</li>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() =>
                setProjectCategoryFilter(category.node.data.category)
              }
            >
              {category.node.data.category}
            </li>
          ))}
        </ul>
      </div>
      <div className="display-btn-container">
        <GridBtn />
        <StaggeredBtn />
      </div>
    </FilterContainer>
  )
}

export default ProjectsFilter

const FilterContainer = styled.div`
  position: sticky;
  width: 100%;
  justify-content: space-between;
  top: 0;
  padding: 0 20px;
  display: flex;
  margin-bottom: 20px;

  @media (min-width: ${breakpointSmall}) {
    padding: 0 50px;
  }

  .filter-categories {
    h3 {
      font-size: 24px;
      font-weight: 300;
      margin: 0 0 20px 0;
    }

    ul {
      list-style: none;

      li {
        font-weight: 900;
        font-size: 18px;
        line-height: 1.5;
        text-transform: uppercase;
      }
    }
  }

  .display-btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`

// Grid Btn
const GridBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M4-185h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-176h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-167h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22Z"
        transform="translate(-4 185)"
      />
    </svg>
  )
}

// Staggered Btn
const StaggeredBtn = () => {
  return (
    <svg
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
