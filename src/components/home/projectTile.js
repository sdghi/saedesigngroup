import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall, black } from "../../variables"
import { ImageContainer } from "../../elements"
import { motion } from "framer-motion"
import { useCursorChange } from "../../hooks"

const ProjectTile = ({
  project,
  projectCategoryFilter,
  displayProjectsGrid,
  setProjectCategoryFilter,
  setShowLogos,
}) => {
  const [showProject, setShowProject] = useState(false)
  const [projectSize, setProjectSize] = useState(false)

  const slug = project.node.uid
  const categories = project.node.data.categories
  const projectName = project.node.data.project_name.text
  const imageAlt = project.node.data.featured_image.alt
  const {
    top,
    size,
    is_case_study,
    image_background_light,
    featured_image_video,
  } = project.node.data

  // Handle rendering the sizes
  const renderSizes = () => {
    if (size === "Small") {
      setProjectSize(0.35)
    } else if (size === "Medium") {
      setProjectSize(0.45)
    } else if (size === "Large") {
      setProjectSize(0.55)
    }
  }

  useEffect(() => {
    // Reset to false in case it changes
    setShowProject(false)
    renderSizes()

    // Add Categories for filter
    categories.map(({ category }) => {
      // Show project if the category matches the project filter
      // If it's all show all the projects
      if (category) {
        if (projectCategoryFilter.toLowerCase() === category.slug) {
          setShowProject(true)
        } else if (projectCategoryFilter === "all") {
          setShowProject(true)
        }
      }
      if (!category) {
        // Edge case is user doesn't input a category for a project
        if (projectCategoryFilter === "all") {
          setShowProject(true)
        } else {
          setShowProject(false)
        }
      }

      return null
    })
  }, [projectCategoryFilter, categories])

  const [bind] = useCursorChange(
    is_case_study ? { caseStudy: "caseStudy" } : { selected: "selected" }
  )

  const handleLogoSelection = () => {
    setShowLogos(true)
    setProjectCategoryFilter("")
  }

  if (!showProject) return null

  return (
    <TileContent
      key={project.uid}
      displayProjectsGrid={displayProjectsGrid}
      {...bind}
      widthMd={displayProjectsGrid ? "100%" : `${100 * projectSize}%`}
      // Top and Bottom will be directly affected by their properties in the cms
      top={displayProjectsGrid ? "0" : top}
    >
      {slug === "logo-selection" && (
        <div onClick={handleLogoSelection}>
          {!featured_image_video.url && (
            <ImageContainer
              width="100%"
              widthMd="100%"
              heightMd="100%"
              fluid={
                project.node.data.featured_image.localFile.childImageSharp.fluid
              }
              alt={imageAlt}
              loading="lazy"
            />
          )}
          {featured_image_video.url && (
            <div className="featured-image-gif">
              <video
                src={featured_image_video.url}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          )}
          <h2 className={image_background_light ? "dark-text" : undefined}>
            {projectName}
          </h2>
        </div>
      )}
      {slug !== "logo-selection" && (
        <Link to={`/${slug}`}>
          {!featured_image_video.url && (
            <ImageContainer
              width="100%"
              widthMd="100%"
              heightMd="100%"
              fluid={
                project.node.data.featured_image.localFile.childImageSharp.fluid
              }
              alt={imageAlt}
              loading="lazy"
            />
          )}
          {featured_image_video.url && (
            <div className="featured-image-gif">
              <video
                src={featured_image_video.url}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          )}
          <h2 className={image_background_light ? "dark-text" : undefined}>
            {projectName}
          </h2>
        </Link>
      )}
    </TileContent>
  )
}

export default ProjectTile

const TileContent = styled(motion.div)`
  position: relative;

  .featured-image-gif {
    height: 300px;
    width: 100%;

    video {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
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
    font-size: 1em;

    &.dark-text {
      color: ${black};
    }
  }

  ${ImageContainer} {
    filter: brightness(0.95);
  }

  @media (min-width: ${breakpointSmall}) {
    margin: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "0px" : "50px auto"};
    width: ${({ widthMd }) => widthMd};
    /* Height auto will maintain the orientation of the image  */
    height: ${({ displayProjectsGrid }) =>
      displayProjectsGrid ? "300px" : "auto"};
    margin-top: ${({ displayProjectsGrid, top }) =>
      !displayProjectsGrid && `${top * 4}vw`};

    .featured-image-gif {
      height: ${({ displayProjectsGrid }) =>
        displayProjectsGrid ? "300px" : "100%"};
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
      font-size: 1em;
      opacity: 0;
      transition: all 0.2s ease-out;

      &.dark-text {
        color: ${black};
      }
    }

    ${ImageContainer} {
      filter: brightness(0.95);
    }

    &:hover {
      h2 {
        opacity: 1;
        transition: all 0.2s ease-in;
      }
    }
  }
`
