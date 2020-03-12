import React from 'react'
import styled from 'styled-components'
import { white } from '../../variables'
import Tilt from "react-tilt"
import { motion } from 'framer-motion'


const AboutCard = ({ index, isSelected, setIsSelected, person }) => {

    // Handle click
    const handleClick = () => {
        if (isSelected !== index) {
            setIsSelected(index)  // If it isn't selected make it selected
        } else {
            setIsSelected(null) // If it is selected close it by setting it to null
        }
    }

    return (
        <Tilt >
            <Card
                onClick={() => handleClick()}
                positionTransition
                whileHover={{ scale: 1.1 }}
            >
                {person}
            </Card>
        </Tilt>
    )
}

export default AboutCard;

const Card = styled(motion.div)`
    background: ${white};
    height: 300px;
    width: 300px;
    border-radius: 10px;
    display: grid;
    place-items: center;
`;