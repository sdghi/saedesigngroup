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
        }
        else {
            setIsSelected(null) // If it is selected close it by setting it to null
        }
    }

    const cardVariants = {
        selected: {
            x: 'calc(50vw - 200px)',
            y: 'calc(50vh - 300px)',
            height: 600,
            width: 400,
        },
        unselected: {
            x: 0,
            y: 0,
            height: 300,
            width: 300,
        }
    }


    return (

        <Card
            variants={cardVariants}
            animate={isSelected ? 'selected' : 'unselected'}
            onClick={() => handleClick()}
            positionTransition
            key={index}
            isSelected={isSelected}
            index={index}
            drag
            onDragEnd={() => setIsSelected(index - 1)}
        >
            {person}
        </Card>

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
    position: ${({ isSelected }) => isSelected ? 'absolute' : 'relative'};
    z-index: ${({ index, isSelected }) => isSelected == index ? '200' : '0'};
    user-select: none;
`;