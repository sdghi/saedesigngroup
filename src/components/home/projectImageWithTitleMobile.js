import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall } from "../../variables"
import { ImageContainer } from "../../elements"

const ProjectImageWithTitleMobile = ({
    project,
    projectCategoryFilter,
}) => {
    const slug = project.node.uid
    const categories = project.node.data.categories
    const projectName = project.node.data.project_name.text
    const imageSrc =
        project.node.data.featured_image.localFile.childImageSharp.fluid
    const imageAlt = project.node.data.featured_image.alt

    const [showProject, setShowProject] = useState(false)


    useEffect(() => {
        // Reset to false in case it changes
        setShowProject(false)

        // Add Categories for filter
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
                <Link to={`/${slug}`}>
                    <ProjetContainer key={project.uid}>
                        <ImageContainer
                            width="100%"
                            widthMd="100%"
                            heightMd="100%"
                            fluid={imageSrc}
                            alt={imageAlt}
                        />
                        <h2>{projectName}</h2>
                    </ProjetContainer>
                </Link>
            )}

        </>
    )
}

export default ProjectImageWithTitleMobile

const ProjetContainer = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  width: 100%;

  h2 {
    color: white;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.875rem;
  }

  ${ImageContainer} {
    filter: brightness(0.95);
  }

  @media (min-width: ${breakpointSmall}) {
    display: none;
  }
`
