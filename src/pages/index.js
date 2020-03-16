import React, { useEffect, useState, useContext, useCallback } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { breakpointSmall } from "../variables"
import { Container } from "../elements"
import { myContext } from "../provider"
import ProjectsFilter from "../components/home/projectsFilter"
import Logos from "../components/home/logos"
import ProjectCategoryInfo from "../components/home/projectCategoryInfo"
import MobileProjectsFilter from "../components/home/mobileProjectsFilter"
import HomeHeroSection from '../components/home/homeHeroSection'
import ProjectImageWithTitle from "../components/home/projectImageWithTitle"
import ProjectImageWithTitleMobile from '../components/home/projectImageWithTitleMobile'
import TransitionWrapper from '../components/wrappers/transitionWrapper'

export const query = graphql`
  {
    allPrismicProjectTemplate(sort: {fields: first_publication_date, order: DESC}) {
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
              localFile {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            is_case_study
            placement
            grid_column
            size
            top
            left
            bottom
            right
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
  } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

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
    if (projectCategoryFilter !== 'all') {
      setDisplayProjectsGrid(true)
    }
    if (projectCategoryFilter === 'all') {
      setDisplayProjectsGrid(false)
    }
  }, [scrollWindowHeight, setScrollWindowHeight, startScroll, projectCategoryFilter])

  // Handle Parallax
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setElTop(node.offsetTop)
    }
  }, []);

  return (
    <Layout>
      <TransitionWrapper>
        <SEO title="Home" />
        <HomeHeroSection
          setCursorElement={setCursorElement}
          setStartScroll={setStartScroll}
          setProjectCategoryFilter={setProjectCategoryFilter}
          setShowLogos={setShowLogos}
          setScrollWindowHeight={setScrollWindowHeight}
        />

        <ProjectsSection>
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
          {showLogos && <Logos setCursorElement={setCursorElement} />}

          {/* Show the project category info it isn't all  and logos aren't active */}
          {projectCategoryFilter !== "all" && !showLogos && (
            <ProjectCategoryInfo projectCategoryFilter={projectCategoryFilter} />
          )}

          {!showLogos && (
            <ProjectsContainer
              display={displayProjectsGrid ? "grid" : "block"}
              padding="0 5%"
              paddingMd="0 15%"
              ref={measuredRef}
            >
              {projects.map(project => (
                <>
                  <ProjectImageWithTitle
                    displayProjectsGrid={displayProjectsGrid}
                    key={project.node.uid}
                    project={project}
                    projectCategoryFilter={projectCategoryFilter}
                    setCursorElement={setCursorElement}
                    totalProjects={projects.length}
                    elTop={elTop}
                  />
                  <ProjectImageWithTitleMobile
                    key={project.node.uid}
                    project={project}
                    projectCategoryFilter={projectCategoryFilter}
                    totalProjects={projects.length}
                  />
                </>
              ))}
            </ProjectsContainer>
          )}
        </ProjectsSection>
      </TransitionWrapper>
    </Layout>
  )
}

export default IndexPage

const ProjectsContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${breakpointSmall}) {
    display: ${({ display }) => display};
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`

const ProjectsSection = styled.section`
  height: fit-content;
  position: relative;
  overflow: initial;

  .view-filters {
    padding-left: 20px;
  }
`
