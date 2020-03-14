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
            // transition: {
            //     type: "spring",
            //     duration: 0.04,
            //     velocity: 4
            // }
        },
        unselected: {
            x: 0,
            y: 0,
            height: 300,
            width: 300,
            transition: {
                type: "tween",
                duration: 0.4
            }
        }
    }


    return (
        // <Tilt
        //     style={isSelected && { position: 'absolute' }}
        // >
        <Card
            variants={cardVariants}
            animate={isSelected === index ? 'selected' : 'unselected'}
            onClick={() => handleClick()}
            positionTransition
            key={index}
            isSelected={isSelected}
            index={index}
            whileHover={{ scale: 1.1, rotate: '10deg' }}
        >
            {person}

            {
                isSelected === index &&
                <p>you can put a custom bio here or something</p>
            }
        </Card>
        // </Tilt >


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
    position: ${({ isSelected, index }) => isSelected === index ? 'absolute' : 'relative'};
    z-index: ${({ index, isSelected }) => isSelected === index ? '200' : '0'};
    top: ${({ index, isSelected }) => isSelected === index && 0};
    left: ${({ index, isSelected }) => isSelected === index && 0};
    user-select: none;
`;