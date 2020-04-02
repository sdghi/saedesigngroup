import React from 'react'
import { Container, Paragraph } from '../../elements'
import styled from 'styled-components'

const WeAreSection = ({ weAre }) => {
    return (
        <Container padding="60px 0" margin="0">
            <ContentContainer>
                {weAre.map((item, index) =>
                    <Paragraph key={index} fontSize="36px" fontWeight="600">{item.content.text}</Paragraph>
                )}
            </ContentContainer>
        </Container>
    )
}

export default WeAreSection

const ContentContainer = styled.div`
    max-width: 959px;
    margin: 0 auto;
`;