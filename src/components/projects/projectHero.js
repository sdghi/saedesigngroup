import React, { useState } from 'react'
import { Container, ImageContainer } from '../../elements'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './loadingScreen'
import styled from 'styled-components'

const ProjectHero = ({ heroImage, setCursorElement }) => {

    const [loadingScreen, showLoadingScreen] = useState(true)

    return (
        <HeroContainer padding="0" onMouseOver={() => setCursorElement({ initial: "initial" })}>
            <AnimatePresence>
                {loadingScreen && <LoadingScreen />}
            </AnimatePresence>

            <ImageContainer
                height="50vh"
                width="100%"
                heightMd="70vh"
                widthMd="100%"
                maxWidth="100%"
                fluid={heroImage.localFile.childImageSharp.fluid}
                alt={heroImage.alt}
                loading="eager"
                onLoad={() => showLoadingScreen(false)}
            />
        </HeroContainer>
    )
}

export default ProjectHero

const HeroContainer = styled(Container)`
position: relative;
`