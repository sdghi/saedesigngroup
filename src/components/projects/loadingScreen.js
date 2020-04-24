import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { yellow } from '../../variables'
import { useScrollFreeze } from '../../hooks'

const variants = {
    enter: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}

const LoadingScreen = () => {
    useScrollFreeze();

    return (
        <ScreenContainer
            variants={variants}
            initial="enter"
            animate="visible"
            exit="exit"
        >
            More than T Shirts :)
        </ScreenContainer>

    )
}

export default LoadingScreen;

const ScreenContainer = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: ${yellow};
    color: white;
    font-size: 50px;
    display: grid;
    place-items: center;
`;