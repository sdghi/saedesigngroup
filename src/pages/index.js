import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ProjectImageWithTitle from "../components/projectImageWithTitle"
import { black, white } from "../variables"
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
            featured_image {
              alt
              url
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
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
              Sae Design Group is an agency that makes{" "}
              <HeroTextFilterItem
                filterValue="branding"
                newCursorElement="branding"
                content="branding"
                context={context}
                setStartScroll={setStartScroll}
              />
              ,{" "}
              <HeroTextFilterItem
                filterValue="packaging"
                newCursorElement="packaging"
                content="packaging"
                context={context}
                setStartScroll={setStartScroll}
              />
              , and{" "}
              <HeroTextFilterItem
                filterValue="web"
                newCursorElement="web"
                content="web&nbsp;stuff"
                context={context}
                setStartScroll={setStartScroll}
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
              <ProjectImageWithTitle key={project.node.uid} project={project} />
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
}) => {
  const handleProjectFilter = filterValue => {
    console.log("filter Value", filterValue)
    setStartScroll(true)
  }

  return (
    <strong
      role="button"
      tabIndex={0}
      onMouseEnter={() => context.setCursorElement(newCursorElement)}
      onMouseLeave={() => context.setCursorElement("initial")}
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
  padding: 50px;
  background: ${black};
`

const HeroText = styled.h1`
  font-size: 5rem;
  margin: 0;
  width: fit-content;
  font-weight: 400;
  text-align: center;
  color: ${white};

  strong {
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
`

const ProjectsSection = styled.section`
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
