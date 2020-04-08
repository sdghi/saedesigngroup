import React from 'react'
import { Container, Paragraph, HeadingTwo } from '../../elements'
import { pink } from '../../variables'
import styled from 'styled-components'

const AboutQuote = ({ quote, quoteAuthor }) => {
    return (
        <Container padding="130px 0" margin="0">
            <QuoteContainer>
                <Paragraph fontSizeMd="40px" lineHeight="1.6">&quot;{quote.text}&quot;</Paragraph>
                <HeadingTwo fontSize="41px" fontWeight="400" textAlign="right">- {quoteAuthor.text}</HeadingTwo>
            </QuoteContainer>
        </Container>
    )
}

export default AboutQuote

const QuoteContainer = styled.div`
    max-width: 951px;
    margin: 0 auto;

    p{
        text-indent: -.4125em
    }

    ${HeadingTwo}{
        color: ${pink};
    }
`;