import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpointSmall } from "../../variables"
import { ImageContainer } from "../../elements"
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ProjectImageWithTitle = ({
  project,
  projectCategoryFilter,
  displayProjectsGrid,
  setCursorElement,
  elTop
}) => {
  const [showProject, setShowProject] = useState(false)
  const [projectSize, setProjectSize] = useState(false)
  // Const placementValue
  const [placementValue, setPlacementValue] = useState(0)

  const slug = project.node.uid
  const categories = project.node.data.categories
  const projectName = project.node.data.project_name.text
  const imageSrc =
    project.node.data.featured_image.localFile.childImageSharp.fluid
  const imageAlt = project.node.data.featured_image.alt

  const {
    grid_column,
    top,
    left,
    right,
    bottom,
    size,
    is_case_study,
    placement
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

    // handle the placement value if there is no placement it will go on the top
    placement ? setPlacementValue(parseInt(placement)) : setPlacementValue(1)


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
  }, [projectCategoryFilter, categories, placement])


  // Handle Parallax
  // Destructure the scroll Y value from useViewportScroll
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, !displayProjectsGrid ? [elTop, elTop + (placementValue / projectSize * 3)] : [0, 0], [0, -1], {
    clamp: false
  });



  return (
    <>
      {showProject && (
        <Link to={`/${slug}`}>
          <ProjetContainer
            animate={{
              y: displayProjectsGrid && 0
            }}
            style={{ y }}
            key={project.uid}
            displayProjectsGrid={displayProjectsGrid}
            onMouseEnter={() => setCursorElement(is_case_study ? { caseStudy: 'caseStudy' } : { selected: "selected" })}
            onMouseLeave={() => setCursorElement({ initial: "initial" })}
            // Adjust sizes of non grid according to cms
            // 70 and 100 are the biggest values that work before breaking the grid
            // Sizes have to be a value between 0.5 and 1? ex XL : 1, L: 0.8, M:0.6, S: 0.5
            widthMd={displayProjectsGrid ? "100%" : `${60 * projectSize}%`}
            // Top, Left, Bottom and Right will be directly affected by their properties in the cms
            top={displayProjectsGrid ? "0" : top * 4}
            left={displayProjectsGrid ? "0" : left * 4}
            right={displayProjectsGrid ? "0" : right * 4}
            bottom={displayProjectsGrid ? "0" : bottom * 4}
            placement={placement ? placement : 1}
            // Subtract 1 so that if its the 1st column it will start at margin 0
            gridColumn={grid_column - 1}
            // Total width of allProjectsContainer / total number of columns
            // Container is 70% wide with 4 columns
            // IF COLUMNS OR THE WIDTH OF THE CONTAINER EVER CHANGES THEN THESE VALUES ALSO NEED TO CHANGE
            columnIncrements={70 / 4}
          >
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

export default ProjectImageWithTitle

const ProjetContainer = styled(motion.div)`
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
    z-index: ${props => props.placement};
    width: ${props => props.widthMd};
    /* Height auto will maintain the orientation of the image  */
    height: ${props => props.displayProjectsGrid ? '300px' : 'auto'};
    /* Default spacing between the project image with title  */
    margin-bottom: ${props => (props.displayProjectsGrid ? "0px" : "50px")};
    /* Bottom will override the default spacing  */
    bottom: ${props => !props.displayProjectsGrid && `${props.bottom}em`};
    margin-top: ${props => `${props.top}em`};
    /* Keep thes values left and right or they will override  the grid snapping of margins below  */
    left: ${props => `${props.left}%`};
    right: ${props => `${props.right}%`};
    /* If the gridColumn is the maximum then make the margin right 0 so it snaps to the end  */
    margin-right: ${props => props.gridColumn === 3 && 0};
    /* If the gridColumn is not the maximum then give a margin left of the gridColumn * columnIncrements
      If it is the maximum then don't render a margin left so that it will snap to the margin right specified above
     */
    margin-left: ${props =>
    props.displayProjectsGrid
      ? "0px"
      : `calc(${props.gridColumn !== 3 &&
      props.gridColumn * props.columnIncrements}% )`};
  }
`
