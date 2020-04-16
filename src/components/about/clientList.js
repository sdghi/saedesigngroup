import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, HeadingTwo } from '../../elements'
import { grey } from '../../variables'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'
import { useToggle } from '../../hooks'

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
    const [startMarquee, toggleMarquee] = useToggle()

    return (
        <Waypoint
            onEnter={toggleMarquee}
            onLeave={toggleMarquee}
        >
            <Container margin="0" padding="0 0 80px 0" css={{ overflow: 'hidden' }}>
                <HeadingTwo fontSize="48px" textAlign="center">CLIENTS</HeadingTwo>
                <MarqueeContainer startMarquee={startMarquee}>
                    <MarqueeContent>
                        {clients.map(({ client }, i) => <span key={i}>{client.text}<span className="dot">&#183;</span></span>)}
                    </MarqueeContent>
                    <MarqueeContent className="second">
                        {clients.map(({ client }, i) => <span key={i}>{client.text}<span className="dot">&#183;</span></span>)}
                    </MarqueeContent>
                </MarqueeContainer>
            </Container>
        </Waypoint>
    )
}

export default ClientList


const MarqueeContainer = styled.div`
    overflow-x: hidden;
    display: flex;
    width: fit-content;
    transform:  translate3d(calc(-25% + 10vw), 0, 0);
    animation: marquee 45s linear infinite;
    animation-play-state: ${({ startMarquee }) => startMarquee ? 'play' : 'paused'};

    @keyframes marquee {
        0% {
            transform:  translate3d(calc(-25% + 10vw), 0, 0);
        }

        100% {
            transform:  translate3d(calc(-50% + 10vw), 0, 0);
        }
    }
`;

const MarqueeContent = styled.div`
    width: 7800px;
    text-align: right;

    &.second{
        text-align: left;
    }

    span{
        color: ${grey};
        font-size: 18px;
        font-weight: 300;
        margin-right: 4px;
        line-height: 1.5;
        text-transform: uppercase;
        letter-spacing: 0.2em;

        .dot{
            margin-left: 4px;
            font-weight: 600;
        }
    }
`;