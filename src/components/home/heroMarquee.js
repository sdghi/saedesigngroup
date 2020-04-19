import React from 'react'
import styled from 'styled-components'

const HeroMarquee = () => {
    return (
        <Marquee>
            <div className="inner">
                <h2>Delightful&nbsp;</h2>
                <h2>Design&nbsp;</h2>
                <h2>By&nbsp;</h2>
                <h2>Good&nbsp;</h2>
                <h2>People&nbsp;</h2>
                <h2>Delightful&nbsp;</h2>
                <h2>Design&nbsp;</h2>
                <h2>By&nbsp;</h2>
                <h2>Good&nbsp;</h2>
                <h2>People&nbsp;</h2>
                <h2>Delightful&nbsp;</h2>
                <h2>Design&nbsp;</h2>
                <h2>By&nbsp;</h2>
                <h2>Good&nbsp;</h2>
                <h2>People&nbsp;</h2>
                <h2>Delightful&nbsp;</h2>
                <h2>Design&nbsp;</h2>
                <h2>By&nbsp;</h2>
                <h2>Good&nbsp;</h2>
                <h2>People&nbsp;</h2>
            </div>
        </Marquee>
    )
}

export default HeroMarquee

const Marquee = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 0;
    width: fit-content;
    pointer-events: none;

    .inner{
        width: fit-content;
        display: flex;
        position: relative;
        transform: translate3d(0, 0, 0);
        animation: marquee 10s linear infinite;
        animation-play-state: running;

        h2{
            font-size: 72px;
            width: 100%;
        }
    }

    @keyframes marquee {
        0% {
            transform: translate3d(calc(-25% + 20vw), 0, 0);
        }

        100% {
            transform: translate3d(calc(-50% + 20vw), 0, 0);
        }
    }
`;