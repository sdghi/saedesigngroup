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
            transition: {
                type: 'spring',
                duration: 0.1
            }
        },
        unselected: {
            x: 0,
            y: 0,
            transition: {
                type: "tween",
                duration: 0.4
            }
        }
    }


    return (
        // <Tilt
        //     style={isSelected === index ? { position: 'absolute', zIndex: 200 } : { width: '100%', height: '400px' }}
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
    border-radius: 10px;
    display: grid;
    place-items: center;
    height: ${({ isSelected, index }) => isSelected === index ? '600px' : '400px'};
    width: ${({ isSelected, index }) => isSelected === index ? '400px' : '100%'};
    position: ${({ isSelected, index }) => isSelected === index ? 'absolute' : 'relative'};
    z-index: ${({ index, isSelected }) => isSelected === index ? '200' : '0'};
    top: ${({ index, isSelected }) => isSelected === index && 0};
    left: ${({ index, isSelected }) => isSelected === index && 0};
    user-select: none;
`;