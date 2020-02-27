import React, { useRef, useEffect, useState, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsFilter from "../components/projectsFilter"
import styled from "styled-components"
import ProjectImageWithTitle from "../components/projectImageWithTitle"
import { breakpointSmall, breakpointMedium, pink, yellow } from "../variables"
import { Container } from "../elements"
import { myContext } from "../provider"
import HeroTextFilterItem from "../components/heroTextFilterItem"
import Logos from "../components/logos"
import ProjectCategoryInfo from "../components/projectCategoryInfo"
import MobileProjectsFilter from "../components/mobileProjectsFilter"

export const query = graphql`
  {
    allPrismicProjectTemplate {
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
            grid_column
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

  const heroRef = useRef(null)

  const [startScroll, setStartScroll] = useState(false)
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all")
  const [displayProjectsGrid, setDisplayProjectsGrid] = useState(false)
  const [showLogos, setShowLogos] = useState(false)

  const {
    setCursorElement,
    scrollWindowHeight,
    setScrollWindowHeight,
  } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  useEffect(() => {
    setScrollWindowHeight(heroRef.current.offsetHeight)

    // If start scroll is true scroll down the height of the first section
    // Scroll down the window
    startScroll &&
      window.scroll({
        top: scrollWindowHeight,
        behavior: "smooth",
      })

    // Reset the scroll in case the user scrolls back up
    setStartScroll(false)
  }, [scrollWindowHeight, setScrollWindowHeight, startScroll])

  return (
    <Layout>
      <SEO title="Home" />
      <HomeHero ref={heroRef}>
        <HeroText>
          Sae what you mean to sae, with SaeDesignGroup. <br />
          Delightful{" "}
          <HeroTextFilterItem
            filterValue="branding"
            newCursorElement="branding"
            content="branding"
            setCursorElement={setCursorElement}
            setStartScroll={setStartScroll}
            setProjectCategoryFilter={setProjectCategoryFilter}
            setShowLogos={setShowLogos}
          />
          ,{" "}
          <HeroTextFilterItem
            filterValue="packaging"
            newCursorElement="packaging"
            content="packaging"
            setCursorElement={setCursorElement}
            setStartScroll={setStartScroll}
            setProjectCategoryFilter={setProjectCategoryFilter}
            setShowLogos={setShowLogos}
          />{" "}
          design (and more) by good people
        </HeroText>
      </HomeHero>
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
          >
            {projects.map(project => (
              <ProjectImageWithTitle
                displayProjectsGrid={displayProjectsGrid}
                key={project.node.uid}
                project={project}
                projectCategoryFilter={projectCategoryFilter}
                setCursorElement={setCursorElement}
                totalProjects={projects.length}
              />
            ))}
          </ProjectsContainer>
        )}
      </ProjectsSection>
    </Layout>
  )
}

export default IndexPage

const ProjectsContainer = styled(Container)`
  display: grid;
  grid-gap: 20px;

  @media (min-width: ${breakpointSmall}) {
    display: ${props => props.display};
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`

const HomeHero = styled.section`
  height: calc(100vh - 7vh);
  width: 100%;
  display: grid;
  place-items: center;
  background: ${yellow};
`

const HeroText = styled.h1`
  font-size: 24px;
  margin: 0 auto;
  width: fit-content;
  max-width: 1400px;
  font-weight: 300;
  color: ${pink};
  padding: 0 20px;

  strong {
    position: relative;
    z-index: 10;
  }

  @media (min-width: ${breakpointSmall}) {
    font-size: 64px;
    padding: 0 50px;
  }

  @media (min-width: ${breakpointMedium}) {
    font-size: 104px;
  }
`

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 50px 0;
  position: relative;
  overflow-x: initial;
  overflow-y: initial;
  overflow: initial;

  .view-filters {
    padding-left: 20px;
  }
`
