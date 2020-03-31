import React, { useState } from 'react'
import { Container, ImageContainer } from '../../elements'
import LoadingScreen from './loadingScreen'
import styled from 'styled-components'

const ProjectHero = ({ heroImage }) => {

    const [loadingScreen, showLoadingScreen] = useState(true)

    return (
        <HeroContainer padding="0">
            <LoadingScreen loadingScreen={loadingScreen} />
            <ImageContainer
                height="calc(50vh - 7vh)"
                width="100%"
                heightMd="calc(100vh - 7vh)"
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