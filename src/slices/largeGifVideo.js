import React from "react"
import styled from 'styled-components'
import { Container } from "../elements"
import ScrollWrapper from '../components/wrappers/scrollWrapper'

const LargeGifVideo = ({ slice }) => {
    const { link, full_width } = slice.primary

    return (
        <ScrollWrapper>
            <Container padding={full_width === 'true' && "0"}>
                <Video src={link.url} autoPlay muted loop playsInline />
            </Container>
        </ScrollWrapper>
    )
}

export default LargeGifVideo

const Video = styled.video`
    object-fit: cover;
    width: 100%;
    max-width: ${({ full_width }) => full_width === 'true' && '100%'};
    height: ${({ full_width }) => full_width === 'ture' && '100vh'};
`;