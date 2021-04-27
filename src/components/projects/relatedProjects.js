import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HeadingTwo } from "../../elements"
import { breakpointSmall, black } from "../../variables"
import { useAppContext } from "../../provider"

const RelatedProjects = ({ allProjects, currentIndex }) => {
  const filteredProjects = allProjects.filter((_, i) => i !== index - 1)
  const [index, setIndex] = useState(currentIndex)
  const [related, setRelated] = useState([])

  const { setCursorElement } = useAppContext()

  function next() {
    if (index === filteredProjects.length - 1) {
      return setIndex(0)
    }

    setIndex(index + 1)
  }

  function previous() {
    if (index === 0) {
      return setIndex(filteredProjects.length - 1)
    }
    setIndex(index - 1)
  }

  useEffect(() => {
    setRelated([
      filteredProjects[index - 1]
        ? filteredProjects[index - 1]
        : filteredProjects[filteredProjects.length - 1],
      filteredProjects[index],
      filteredProjects[index + 1]
        ? filteredProjects[index + 1]
        : filteredProjects[0],
    ])
  }, [index])

  return (
    <div>
      <HeadingTwo
        fontSize="20px"
        textAlign="center"
        bottom="35px"
        css="text-transform: uppercase"
      >
        More Stuff
      </HeadingTwo>
      {/* TODO: Animation between the related projects */}
      <RelatedWrapper>
        {related.map(({ node }, i) => (
          <Link
            to={`/${node.uid}`}
            key={i}
            onMouseEnter={() =>
              setCursorElement({ related: node.data.project_name.text })
            }
            onMouseLeave={() => setCursorElement({ initial: "initial" })}
          >
            {node.data.featured_image_video.url ? (
              <video
                src={node.data.featured_image_video.url}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={node.data.featured_image.url}
                alt={node.data.project_name.text}
              />
            )}
            <p>{node.data.project_name.text}</p>
          </Link>
        ))}
      </RelatedWrapper>
      <div>
        <button onClick={previous}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}

export default RelatedProjects

const RelatedWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 50px;

  a {
    margin-right: 30px;
  }

  img,
  video {
    height: 280px;
    object-fit: cover;
    width: 280px;
    filter: brightness(0.95);
  }

  p {
    text-transform: uppercase;
    color: ${black};
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: ${breakpointSmall}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-bottom: 0;

    a {
      margin-right: 0;
      position: relative;
      width: 100%;
    }

    img,
    video {
      width: 100%;
      height: 330px;
    }

    p {
      display: none;
    }
  }
`
