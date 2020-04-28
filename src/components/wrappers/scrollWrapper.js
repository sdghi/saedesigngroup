import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            ease: 'linear'
        }
    }
}

const ScrollWrapper = ({ children }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <Waypoint onEnter={() => setVisible(true)}>
            <motion.div
                variants={variants}
                initial="initial"
                animate={isVisible && 'visible'}
            >
                {children}
            </motion.div>
        </Waypoint>
    )
}

export default ScrollWrapper;