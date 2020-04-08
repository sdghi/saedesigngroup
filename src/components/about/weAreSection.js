import React, { useEffect, useState } from 'react'
import { Container, Paragraph } from '../../elements'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const WeAreSection = ({ weAre }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countChange = setInterval(() => {
            if (count === weAre.length - 1) {
                setCount(0);
            } else {
                setCount(count + 1)
            }

        }, [1000])

        return () => { clearInterval(countChange) }
    }, [count])

    const variants = {
        hidden: {
            // y: 50,
            opacity: 0
        },
        visible: {
            // y: 0,
            opacity: 1
        }
    }

    return (
        <Container padding="60px 0" margin="0">
            <ContentContainer>
                <Paragraph fontSize="36px" fontWeight="500" >We are
                <AnimatePresence>
                        <motion.span
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        // key={count}
                        > {weAre[count].content.text}</motion.span>
                    </AnimatePresence>
                </Paragraph>
            </ContentContainer>
        </Container>
    )
}

export default WeAreSection

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 959px;
    min-height: 300px;
    margin: 0 auto;
`;