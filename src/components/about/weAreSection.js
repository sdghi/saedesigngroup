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

        }, [2000])

        return () => { clearInterval(countChange) }
    }, [count])

    const variants = {
        enter: {
            y: -40,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8
            }
        },
        exit: {
            opacity: 0,
            y: 20
        }
    }

    return (
        <Container padding="60px 0" margin="0">
            <ContentContainer>
                <Paragraph fontSize="36px" fontWeight="700">We are &nbsp;
                <AnimatePresence>
                        <motion.span
                            className="we-are-text"
                            variants={variants}
                            initial="enter"
                            animate="visible"
                            exit="exit"
                            key={count}
                        >{weAre[count].content.text}</motion.span>
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
    padding: 0 5%;
    min-height: 300px;
    margin: 0 auto;
    position: relative;

    .we-are-text{
        position: absolute;
        font-weight: 500;
    }
`;