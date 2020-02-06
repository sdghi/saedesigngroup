import React from "react"
import { Link, graphql } from "gatsby"
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
                  fluid {
                    srcSet
                  }
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

  return (
    <myContext.Consumer>
      {context => (
        <Layout>
          <SEO title="Home" />
          <HomeHero>
            <HeroText>
              Sae Design Group is an agency that makes{" "}
              <strong
                onMouseOver={() => context.setCursorElement("branding")}
                onMouseLeave={() => context.setCursorElement("initial")}
              >
                branding
              </strong>
              ,{" "}
              <strong
                onMouseOver={() => context.setCursorElement("packaging")}
                onMouseLeave={() => context.setCursorElement("initial")}
              >
                packaging
              </strong>
              , and{" "}
              <strong
                onMouseOver={() => context.setCursorElement("web")}
                onMouseLeave={() => context.setCursorElement("initial")}
              >
                web&nbsp;stuff
              </strong>
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
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage

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
