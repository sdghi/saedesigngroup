import React from "react"
import Link from "gatsby-plugin-transition-link"
import { useSpring, animated, useTrail, config } from "react-spring"
import styled from 'styled-components';
import { pink, yellow, black } from '../variables';

const items = ["", "services", "about", "contact"]

const Navigation = ({ isNavOpen, toggle }) => {

  // This has to be converted to a useChain in react spring


  const trails = useTrail(items.length, {
    opacity: isNavOpen ? 1 : 0,
    config: config.gentle,
  })
  return (
    <Nav style={toggle}>
      <ul>
        {trails.map((animation, index) => (
          <animated.li key={items[index]} style={animation} >
            <Link to={`/${items[index]}`}>
              {
                items[index] === "" ? "work" : items[index]
              }
            </Link>
          </animated.li>
        )
        )}
      </ul>
    </Nav>
  )
}


const Nav = styled(animated.nav)`
  position: absolute;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background: ${black};
  z-index: -1;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;

  ul {
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      width: fit-content;
    }

    a {
      font-size: 10vw;
      font-weight: 700;
      color: ${pink};
      margin: 0;
      position: relative;
      z-index: 10;
    }
  }

  .nav_items {
    margin-right: 2.5%;
    display: flex;
    a {
      margin: 0 10px;
    }
  }


@media (min-width: 768px) {
    ul {
      a {
        width: fit-content;
        font-size: 6vw;
        -webkit-text-stroke-width: 0.1vw;
        -webkit-text-stroke-color: ${pink};
        color: transparent;
        transition: all 0.3s ease;
        transform-origin: center center;
      }

      li:hover {
        a {
          -webkit-text-stroke-color: ${yellow};
          color: ${yellow};
        }
      }
    }

    ul li:hover:nth-of-type(odd):hover {
    transform: scale(1.05) rotate(-4deg);
  }

   ul li:nth-of-type(even):hover {
    transform: scale(1.05) rotate(4deg);
  }
}
`



export default Navigation
