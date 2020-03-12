import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { white } from '../variables'

const variants = {
    enter: {
        opacity: 0,
        scale: 0,
        rotateY: 180
    },
    loaded: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.3
        }
    }
}

const AboutFeature = ({ setIsSelected, person }) => {
    return (
        <AnimatePresence>
            <FeatureCard
                variants={variants}
                drag
                onDragEnd={() => setIsSelected(null)}
                initial="enter"
                animate="loaded"
                exit="enter"
            >
                {person}
            </FeatureCard>
        </AnimatePresence>
    )
}

export default AboutFeature;

const FeatureCard = styled(motion.div)`
z-index: 100;
  height: 50vh;
  width: 300px;
  position: absolute;
  top: 25vh;
  left: calc(50% - 150px);
  background: ${white};
`;