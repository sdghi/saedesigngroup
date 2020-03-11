import React from 'react'
import styled from 'styled-components'
import { white } from '../variables'
import Tilt from "react-tilt";


const AboutCard = () => {
    return (
        <Tilt >
            <Card />
        </Tilt>
    )
}

export default AboutCard;

const Card = styled.div`
    background: ${white};
    height: 100%;
    width: 100%;
`;