import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { yellow } from '../../variables'
import { useScrollFreeze } from '../../hooks'

const screenVariants = {
    enter: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
}

const textVariants = {
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.5
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8
        }
    }
}

const LoadingScreen = () => {
    useScrollFreeze();

    return (
        <ScreenContainer
            variants={screenVariants}
            initial="enter"
            animate="visible"
            exit="exit"
        >
            <motion.h3 variants={textVariants} initial="hidden" animate="visible" exit="hidden">
                More than T Shirts :)
            </motion.h3>
        </ScreenContainer>

    )
}

export default LoadingScreen;

const ScreenContainer = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999999;
    background: ${yellow};
    color: white;
    font-size: 50px;
    display: grid;
    place-items: center;
`;