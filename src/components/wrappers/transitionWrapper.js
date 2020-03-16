import React from 'react'
import { motion } from 'framer-motion'

const TransitionWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                type: 'spring',
                damping: 150
            }}
        >
            {children}
        </motion.div >
    )
}

export default TransitionWrapper;