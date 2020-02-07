import React, { useRef } from "react"
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
              />
              ,{" "}
              <HeroTextFilterItem
                filterValue="packaging"
                newCursorElement="packaging"
                content="packaging"
                context={context}
              />
              , and{" "}
              <HeroTextFilterItem
                filterValue="web"
                newCursorElement="web"
                content="web&nbsp;stuff"
                context={context}
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
}) => {
  const handleProjectFilter = filterValue => {
    console.log("filter Value", filterValue)
    // scroll down the window the height of the heroRef
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
