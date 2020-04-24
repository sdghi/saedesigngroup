import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { Container, Paragraph, HeadingTwo } from '../../elements'
import { pink } from '../../variables'

const AboutQuote = ({ quotes }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const handleQuoteChange = setInterval(() => {
            if (current === quotes.length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        }, 3000);
        return () => clearInterval(handleQuoteChange);
    }, [current])

    const quoteVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <Container padding="130px 0" margin="0" height="100vh">
            <AnimatePresence exitBeforeEnter>
                <QuoteContainer variants={quoteVariants} key={current} initial="hidden" animate="visible" exit="hidden">
                    <Paragraph fontSizeMd="40px" lineHeight="1.6">&quot;{quotes[current].quote.text}&quot;</Paragraph>
                    <HeadingTwo fontSize="41px" fontWeight="400" textAlign="right">- {quotes[current].quote_author.text}</HeadingTwo>
                </QuoteContainer>
            </AnimatePresence>
        </Container>
    )
}

export default AboutQuote

const QuoteContainer = styled(motion.div)`
    max-width: 951px;
    margin: 0 auto;

    p{
        text-indent: -.4125em
    }

    ${HeadingTwo}{
        color: ${pink};
    }
`;