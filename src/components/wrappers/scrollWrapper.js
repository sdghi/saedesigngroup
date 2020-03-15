import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        y: 20,
        transition: {
            type: 'spring'
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 0.6
        }
    }
}

const ScrollWrapper = ({ children }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <Waypoint
            topOffset='50px'
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