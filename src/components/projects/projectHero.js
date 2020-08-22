import React, { useEffect } from "react"
import { Container, ImageContainer } from "../../elements"
import styled from "styled-components"

const ProjectHero = ({ heroImage, setCursorElement }) => {
  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [])

  return (
    <HeroContainer padding="0">
      <ImageContainer
        height="50vh"
        width="100%"
        heightMd="70vh"
        widthMd="100%"
        maxWidth="100%"
        fluid={heroImage.fluid}
        alt={heroImage.alt}
      />
    </HeroContainer>
  )
}

export default ProjectHero

const HeroContainer = styled(Container)`
  position: relative;
`
