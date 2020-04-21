import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { yellow } from '../../variables'

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
            duration: 0.4
        }
    }
}

const LoadingScreen = ({ loadingScreen }) => {
    useEffect(() => {
        document.body.style.overflow = loadingScreen ? "hidden" : "visible"
    }, [loadingScreen])

    return (
        <AnimatePresence>
            {loadingScreen &&
                <ScreenContainer
                    variants={variants}
                    initial="enter"
                    animate="visible"
                    exit="exit"
                >
                    loading loading loading
                </ScreenContainer>
            }
        </AnimatePresence>

    )
}

export default LoadingScreen;

const ScreenContainer = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${yellow};
    color: white;
    font-size: 50px;
`;