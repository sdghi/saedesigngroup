import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { black } from '../../variables'

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
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
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    loading loading loading
                </ScreenContainer>
            }
        </AnimatePresence>

    )
}

export default LoadingScreen;

const ScreenContainer = styled(motion.div)`
    height: 93vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: ${black};
    color: white;
    font-size: 50px;
`;