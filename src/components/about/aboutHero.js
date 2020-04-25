import React from 'react'
import { Container, HeadingTwo } from '../../elements'
import { breakpointSmall, yellow, black } from '../../variables'
import styled from 'styled-components'
import WeAreSection from './weAreSection'

const AboutHero = ({ title, description, weAre }) => {
    return (
        <HeroContainer height="93vh" margin="0" >
            <WeAreSection weAre={weAre} />
            {/* <HeadingTwo fontWeight="300" fontSizeMd="124px" textAlign="center" css={{ margin: 0 }}>{title.text}</HeadingTwo> */}
            <HeroContent dangerouslySetInnerHTML={{ __html: description.html }} />
        </HeroContainer>
    )
}

export default AboutHero

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${yellow};
    color: ${black};
`;

const HeroContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    p{
        font-weight: 300;
        line-height: 1.5;
    }

    @media(min-width: ${breakpointSmall}){
        font-size: 28px;
    }
`;