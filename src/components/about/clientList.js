import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, HeadingTwo } from '../../elements'
import { grey } from '../../variables'
import styled from 'styled-components'

const ClientList = () => {
    const data = useStaticQuery(graphql`
    {
    allPrismicClientList{
        edges{
            node{
            data{
            clients{
                client{
                text
                }
            }
            }
        }
        }
    }
    }
    `);


    const { clients } = data.allPrismicClientList.edges[0].node.data

    return (
        <Container margin="0" padding="80px 0">
            <HeadingTwo fontSize="48px" textAlign="center">CLIENTS</HeadingTwo>
            <MarqueeContainer>
                <MarqueeContent>
                    {clients.map(({ client }, i) => <span key={i}>{client.text}<span className="dot">&#183;</span></span>)}
                </MarqueeContent>
            </MarqueeContainer>
        </Container>
    )
}

export default ClientList

const MarqueeContainer = styled.div`
    overflow-x: hidden;
`;

const MarqueeContent = styled.div`
    width: 429%;
    transform: translate3d(-20%, 0 ,0);

    span{
        color: ${grey};
        font-size: 19px;
        font-weight: 300;
        margin-right: 4px;
        line-height: 1.5;

        .dot{
            margin-left: 4px;
            font-weight: 600;
        }
    }
`;