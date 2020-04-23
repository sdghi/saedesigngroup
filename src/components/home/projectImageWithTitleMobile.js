import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall, black } from "../../variables"
import { ImageContainer } from "../../elements"

const ProjectImageWithTitleMobile = ({
    project,
    projectCategoryFilter,
}) => {
    const slug = project.node.uid
    const categories = project.node.data.categories
    const projectName = project.node.data.project_name.text
    // const imageSrc =
    //     project.node.data.featured_image.localFile.childImageSharp.fluid
    const imageAlt = project.node.data.featured_image.alt

    const { featured_image_is_gif, image_background_light } = project.node.data

    const [showProject, setShowProject] = useState(false)


    useEffect(() => {
        // Reset to false in case it changes
        setShowProject(false)

        // Add Categories for filter
        categories.map(category => {
            // Show project if the category matches the project filter
            // If it's all show all the projects
            if (category.category) {
                if (projectCategoryFilter.toLowerCase() === category.category.slug) {
                    setShowProject(true)
                } else if (projectCategoryFilter === "all") {
                    setShowProject(true)
                }
            }
        })
    }, [projectCategoryFilter, categories])

    return (
        <>
            {showProject && (
                <TileWrapper>
                    <Link to={`/${slug}`}>
                        <ProjetContainer key={`${project.uid}-mobile`}>
                            {!featured_image_is_gif &&
                                <ImageContainer
                                    width="100%"
                                    widthMd="100%"
                                    heightMd="100%"
                                    fluid={project.node.data.featured_image.localFile.childImageSharp.fluid}
                                    alt={imageAlt}
                                />
                            }
                            {/* {featured_image_is_gif &&
                                <img className="featured-image-gif" src={project.node.data.featured_image.url} alt={imageAlt} loading="lazy" />
                            } */}

                            <h2 className={image_background_light ? 'dark-text' : undefined}>{projectName}</h2>

                        </ProjetContainer>
                    </Link>

                </TileWrapper>
            )
            }
        </>
    )
}

export default ProjectImageWithTitleMobile

const TileWrapper = styled.div`
  display: block;

  @media (min-width: ${breakpointSmall}) {
    display: none;
    }
`


const ProjetContainer = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  width: 100%;

  .featured-image-gif{
      width: 100%;
  }

  h2 {
    color: white;
    position: absolute;
    left: 20px;
    margin: 0;
    text-transform: uppercase;
    font-size: 1.325em;
    letter-spacing: 0.1em;
    font-weight: 500;
    bottom: 14px;

    &.dark-text{
        color: ${black};
      }
  }

  ${ImageContainer} {
    filter: brightness(0.95);
  }

`
