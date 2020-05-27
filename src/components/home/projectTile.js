import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall, black } from "../../variables"
import { ImageContainer } from "../../elements"
import { motion } from "framer-motion";
import { useCursorChange } from '../../hooks'

const ProjectTile = ({
    project,
    projectCategoryFilter,
    displayProjectsGrid,
    setProjectCategoryFilter,
    setShowLogos
}) => {
    const [showProject, setShowProject] = useState(false)
    const [projectSize, setProjectSize] = useState(false)

    const slug = project.node.uid
    const categories = project.node.data.categories
    const projectName = project.node.data.project_name.text
    const imageAlt = project.node.data.featured_image.alt
    const {
        grid_column,
        top,
        left,
        right,
        bottom,
        size,
        is_case_study,
        placement,
        image_background_light,
        featured_image_video
    } = project.node.data

    // Handle rendering the sizes
    const renderSizes = () => {
        if (size === "Small") {
            setProjectSize(0.6)
        } else if (size === "Medium") {
            setProjectSize(0.8)
        } else if (size === "Large") {
            setProjectSize(1)
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
            } if (!category) {
                // Edge case is user doesn't input a category for a project
                if (projectCategoryFilter === 'all') {
                    setShowProject(true)
                } else {
                    setShowProject(false)
                }
            }

            return null
        })
    }, [projectCategoryFilter, categories, placement])

    const [bind] = useCursorChange(is_case_study ? { caseStudy: 'caseStudy' } : { selected: "selected" })

    const handleLogoSelection = () => {
        setShowLogos(true);
        setProjectCategoryFilter("");
    }

    if (!showProject) return null;

    return (
        <TileContent
            key={project.uid}
            displayProjectsGrid={displayProjectsGrid}
            {...bind}
            // Adjust sizes of non grid according to cms
            // 70 and 100 are the biggest values that work before breaking the grid
            // Sizes have to be a value between 0.5 and 1? ex XL : 1, L: 0.8, M:0.6, S: 0.5
            widthMd={displayProjectsGrid ? "100%" : `${70 * projectSize}%`}
            // Top, Left, Bottom and Right will be directly affected by their properties in the cms
            top={displayProjectsGrid ? "0" : top}
            left={displayProjectsGrid ? "0" : left}
            right={displayProjectsGrid ? "0" : right}
            bottom={displayProjectsGrid ? "0" : bottom}
            placement={placement ? placement : 1}
            // Subtract 1 so that if its the 1st column it will start at margin 0
            gridColumn={grid_column - 1}
            // Total width of allProjectsContainer / total number of columns
            // Container is 100% wide with 4 columns
            // IF COLUMNS OR THE WIDTH OF THE CONTAINER EVER CHANGES THEN THESE VALUES ALSO NEED TO CHANGE
            columnIncrements={100 / 4}
        >
            {slug === 'logo-selection' &&
                <div onClick={handleLogoSelection}>
                    {!featured_image_video.url &&
                        <ImageContainer
                            width="100%"
                            widthMd="100%"
                            heightMd="100%"
                            fluid={project.node.data.featured_image.localFile.childImageSharp.fluid}
                            alt={imageAlt}
                            loading="lazy"
                        />
                    }
                    {featured_image_video.url &&
                        <video className="featured-image-gif" src={featured_image_video.url} autoPlay loop muted playsInline />
                    }
                    <h2 className={image_background_light ? 'dark-text' : undefined}>{projectName}</h2>
                </div>}
            {slug !== 'logo-selection' &&
                <Link to={`/${slug}`}>
                    {!featured_image_video.url &&
                        <ImageContainer
                            width="100%"
                            widthMd="100%"
                            heightMd="100%"
                            fluid={project.node.data.featured_image.localFile.childImageSharp.fluid}
                            alt={imageAlt}
                            loading="lazy"
                        />
                    }
                    {featured_image_video.url &&
                        <video className="featured-image-gif" src={featured_image_video.url} autoPlay loop muted playsInline />
                    }
                    <h2 className={image_background_light ? 'dark-text' : undefined}>{projectName}</h2>
                </Link>

            }
        </TileContent>
    )
}

export default ProjectTile

const TileContent = styled(motion.div)`
    position: relative;

  .featured-image-gif{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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
    font-size: 1em;

    &.dark-text{
        color: ${black};
      }
  }

  ${ImageContainer} {
    filter: brightness(0.95);
  }

  @media (min-width: ${breakpointSmall}) {
    margin: 0 auto;
    z-index: ${({ placement }) => placement};
    width: ${({ widthMd }) => widthMd};
    /* Height auto will maintain the orientation of the image  */
    height: ${({ displayProjectsGrid }) => displayProjectsGrid ? '300px' : 'auto'};
    /* Default spacing between the project image with title  */
    margin-bottom: ${({ displayProjectsGrid }) => displayProjectsGrid ? "0px" : "50px"};
    /* Bottom will override the default spacing  */
    bottom: ${({ displayProjectsGrid, bottom }) => !displayProjectsGrid && `${bottom}em`};
    margin-top: ${({ top }) => `${top}em`};
    /* Keep thes values left and right or they will override  the grid snapping of margins below  */
    left: ${({ left }) => `${left}%`};
    right: ${({ right }) => `${right}%`};
    /* If the gridColumn is the maximum then make the margin right 0 so it snaps to the end  */
    margin-right: ${({ gridColumn }) => gridColumn === 3 && 0};
    /* If the gridColumn is not the maximum then give a margin left of the gridColumn * columnIncrements
      If it is the maximum then don't render a margin left so that it will snap to the margin right specified above
     */
    margin-left: ${({ displayProjectsGrid, gridColumn, columnIncrements }) =>
        displayProjectsGrid
            ? "0px"
            : `calc(${gridColumn !== 3 &&
            gridColumn * columnIncrements}% )`};

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
      transition: all .2s ease-out;

      &.dark-text{
        color: ${black};
      }
      }

    ${ImageContainer} {
      filter: brightness(0.95);
    }

    &:hover{
      h2{
        opacity: 1;
        transition: all .2s ease-in;
      }
    }
  }
`
