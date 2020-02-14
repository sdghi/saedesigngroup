import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ProjectImageWithTitle from "../components/projectImageWithTitle"
import { black, white, pink, yellow } from "../variables"
import { myContext } from "../provider"

export const query = graphql`
  {
    allPrismicProjectTemplate {
      edges {
        node {
          uid
          data {
            project_name {
              text
            }
            categories {
              category
            }
            featured_image {
              alt
              url
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const projects = data.allPrismicProjectTemplate.edges

  const heroRef = useRef(null)

  const [scrollWindowHeight, setScrollWindowHeight] = useState(0)
  const [startScroll, setStartScroll] = useState(false)
  const [projectCategoryFilter, setProjectCategoryFilter] = useState("all")

  useEffect(() => {
    // If start scroll is true scroll down the height of the first section
    startScroll && setScrollWindowHeight(heroRef.current.offsetHeight)

    // Scroll down the window
    window.scroll({
      top: scrollWindowHeight,
      behavior: "smooth",
    })

    // Reset the scroll in case the user scrolls back up
    setStartScroll(false)
  }, [scrollWindowHeight, startScroll])

  return (
    <myContext.Consumer>
      {context => (
        <Layout>
          <SEO title="Home" />
          <HomeHero ref={heroRef}>
            <HeroText>
              Delightful design by good people. <br />
              Our superpowers are{" "}
              <HeroTextFilterItem
                filterValue="branding"
                newCursorElement="branding"
                content="branding"
                context={context}
                setStartScroll={setStartScroll}
                setProjectCategoryFilter={setProjectCategoryFilter}
              />
              ,{" "}
              <HeroTextFilterItem
                filterValue="packaging"
                newCursorElement="packaging"
                content="packaging"
                context={context}
                setStartScroll={setStartScroll}
                setProjectCategoryFilter={setProjectCategoryFilter}
              />{" "}
              and{" "}
              <HeroTextFilterItem
                filterValue="hospitality"
                newCursorElement="hospitality"
                content="hospitality"
                context={context}
                setStartScroll={setStartScroll}
                setProjectCategoryFilter={setProjectCategoryFilter}
              />
              .
            </HeroText>
          </HomeHero>
          <ProjectsSection>
            <ProjectsFilter>
              <h1>hiii</h1>
              <h4>byeee</h4>
            </ProjectsFilter>
            {projects.map(project => (
              <ProjectImageWithTitle
                key={project.node.uid}
                project={project}
                projectCategoryFilter={projectCategoryFilter}
              />
            ))}
          </ProjectsSection>
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage

const HeroTextFilterItem = ({
  context,
  filterValue,
  newCursorElement,
  content,
  setStartScroll,
  setProjectCategoryFilter,
}) => {
  const handleProjectFilter = filterValue => {
    setProjectCategoryFilter(filterValue)
    setStartScroll(true)
  }

  return (
    <strong
      role="button"
      tabIndex={0}
      onMouseEnter={() =>
        context.setCursorElement({ [newCursorElement]: newCursorElement })
      }
      onMouseLeave={() => context.setCursorElement({ initial: "initial" })}
      onClick={() => handleProjectFilter(filterValue)}
      onKeyDown={() => handleProjectFilter(filterValue)}
    >
      {content}
    </strong>
  )
}

const HomeHero = styled.section`
  height: calc(100vh - 7vh);
  width: 100%;
  display: grid;
  place-items: center;
  background: ${yellow};
`

const HeroText = styled.h1`
  font-size: 104px;
  margin: 0 auto;
  width: fit-content;
  max-width: 1200px;
  font-weight: 400;
  color: ${pink};

  strong {
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
`

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 50px 0;
  position: relative;
`

const ProjectsFilter = styled.div`
  position: sticky;
  width: 100%;
  justify-content: space-between;
  top: 0;
  padding: 0 20px;
  display: flex;
  margin-bottom: 20px;
`
