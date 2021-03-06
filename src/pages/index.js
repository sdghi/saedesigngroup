import React, { useEffect, useState, useCallback } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import { useAppContext } from "../provider"
import ProjectsFilter from "../components/home/projectsFilter"
import ProjectGridToggle from "../components/home/projectGridToggle"
import Logos from "../components/home/logos"
import ProjectCategoryInfo from "../components/home/projectCategoryInfo"
import MobileProjectsFilter from "../components/home/mobileProjectsFilter"
import HomeHero from "../components/home/homeHero"
import ProjectsContainer from "../components/home/projectsContainer"

export const query = graphql`
  {
    allPrismicProjectTemplate(
      sort: { fields: first_publication_date, order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            categories {
              category {
                slug
              }
            }
            project_name {
              text
            }
            featured_image {
              alt
              url
              fluid(maxHeight: 500, maxWidth: 500) {
                ...GatsbyPrismicImageFluid
              }
            }
            featured_image_video {
              url
            }
            image_background_light
            is_case_study
            size
            top
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const projects = data.allPrismicProjectTemplate.edges

  const [startScroll, setStartScroll] = useState(false)
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all")
  const [displayProjectsGrid, setDisplayProjectsGrid] = useState(false)
  const [showLogos, setShowLogos] = useState(false)

  // Set the element top
  const [elTop, setElTop] = useState(0)

  const {
    setCursorElement,
    scrollWindowHeight,
    setScrollWindowHeight,
  } = useAppContext()

  useEffect(() => {
    // If start scroll is true scroll down the height of the first section
    // Scroll down the window
    startScroll &&
      window.scroll({
        top: scrollWindowHeight,
        behavior: "smooth",
      })

    // Reset the scroll in case the user scrolls back up
    setStartScroll(false)

    // If projectCategoryFilter !== 'all' set projects to display grid
    if (projectCategoryFilter !== "all") {
      setDisplayProjectsGrid(true)
    }
    if (projectCategoryFilter === "all") {
      setDisplayProjectsGrid(false)
    }
  }, [
    scrollWindowHeight,
    setScrollWindowHeight,
    startScroll,
    projectCategoryFilter,
  ])

  // Handle Parallax
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setElTop(node.offsetTop)
    }
  }, [])

  return (
    <>
      <SEO title="Home" />
      <HomeHero />
      <ProjectsSection id="work">
        {/* Desktop project filter  */}
        <ProjectsFilter
          projectCategoryFilter={projectCategoryFilter}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setDisplayProjectsGrid={setDisplayProjectsGrid}
          displayProjectsGrid={displayProjectsGrid}
          setShowLogos={setShowLogos}
          showLogos={showLogos}
          showMobile={false}
        />

        {/* Uncomment once projects non-grid layout is finished */}
        {/* <ProjectGridToggle
          showLogos={showLogos}
          projectCategoryFilter={projectCategoryFilter}
          setDisplayProjectsGrid={setDisplayProjectsGrid}
          displayProjectsGrid={displayProjectsGrid}
        /> */}
        {/* Mobile project filter  */}
        <MobileProjectsFilter
          projectCategoryFilter={projectCategoryFilter}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setDisplayProjectsGrid={setDisplayProjectsGrid}
          displayProjectsGrid={displayProjectsGrid}
          setShowLogos={setShowLogos}
          showLogos={showLogos}
          showMobile={true}
        />

        {/* Show the project category info it isn't all  */}
        {projectCategoryFilter !== "all" && (
          <ProjectCategoryInfo projectCategoryFilter={projectCategoryFilter} />
        )}

        {showLogos && <Logos setCursorElement={setCursorElement} />}

        <ProjectsContainer
          showLogos={showLogos}
          setShowLogos={setShowLogos}
          // Set back to displayProjectsGrid once feature is completed
          displayProjectsGrid={true}
          measuredRef={measuredRef}
          projects={projects}
          projectCategoryFilter={projectCategoryFilter}
          setProjectCategoryFilter={setProjectCategoryFilter}
          elTop={elTop}
          setCursorElement={setCursorElement}
        />
      </ProjectsSection>
    </>
  )
}

export default IndexPage

const ProjectsSection = styled.section`
  padding-top: 50px;
  min-height: 100vh;
  height: fit-content;
  position: relative;
  overflow: initial;

  .view-filters {
    padding-left: 20px;
  }
`
