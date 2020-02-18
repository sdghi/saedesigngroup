import React, { useState, useEffect } from "react"
import Link from "gatsby-plugin-transition-link"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const ProjectImageWithTitle = ({
  project,
  projectCategoryFilter,
  displayProjectsGrid,
}) => {
  const [showProject, setShowProject] = useState(false)

  const slug = project.node.uid
  const categories = project.node.data.categories
  const projectName = project.node.data.project_name.text
  const imageSrc =
    project.node.data.featured_image.localFile.childImageSharp.fluid
  const imageAlt = project.node.data.featured_image.alt

  useEffect(() => {
    // Reset to false in case it changes
    setShowProject(false)
    categories.map(category => {
      // Show project if the category matches the project filter
      // If it's all show all the projects
      if (projectCategoryFilter.toLowerCase() === category.category.slug) {
        setShowProject(true)
      } else if (projectCategoryFilter === "all") {
        setShowProject(true)
      }

      return null
    })
  }, [projectCategoryFilter, categories])

  return (
    <>
      {showProject && (
        <ProjetContainer
          key={project.uid}
          width={displayProjectsGrid ? "100%" : "80%"}
        >
          <Link to={`/${slug}`}>
            <Img
              fluid={imageSrc}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={imageAlt}
            />
            {projectName}
          </Link>
        </ProjetContainer>
      )}
    </>
  )
}

export default ProjectImageWithTitle

const ProjetContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  margin: 0 auto 0 auto;
  top: ${props => `${props.top}em`};
  left: ${props => `${props.left}em`};
  right: ${props => `${props.right}em`};
`
