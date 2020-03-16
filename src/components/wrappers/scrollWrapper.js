import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.1,
            type: 'spring',
            damping: 200,
            ease: [0.17, 0.67, 0.83, 0.67]
        }
    }
}

const ScrollWrapper = ({ children }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <Waypoint
            topOffset='100px'
            onEnter={() => setVisible(true)}
        >
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