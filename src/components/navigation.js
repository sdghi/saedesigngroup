import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { pink, yellow, black } from "../variables"
import { motion } from "framer-motion"
import { useScrollFreeze } from "../hooks"
import "scroll-behavior-polyfill"

const items = ["work", "services", "about", "contact"]

const navVariants = {
  open: {
    y: 0,
    transition: {
      delay: 0.3,
      dampness: 300,
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.5,
      dampness: 300,
    },
  },
}

const ulVariants = {
  open: {
    transition: {
      delay: 0.7,
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 is forwards and -1 is backwards this is optional
      when: "afterChildren",
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      staggerDirection: -1, // 1 is forwards and -1 is backwards this is optional
    },
  },
}

const linkVariants = {
  open: {
    scale: 1,
    opacity: 1,
  },
  closed: {
    scale: 0,
    opacity: 0,
  },
}

const Navigation = ({ setCursorElement, toggleNav }) => {
  useScrollFreeze()

  return (
    <Nav variants={navVariants} initial="closed" animate="open" exit="closed">
      <motion.ul variants={ulVariants}>
        {items.map((item, index) => (
          <motion.li
            key={index}
            onMouseEnter={() =>
              setCursorElement(
                item === "" ? { work: "work" } : { [item]: [item] }
              )
            }
            onClick={toggleNav}
            onMouseLeave={() => setCursorElement({ initial: "initial" })}
            variants={linkVariants}
          >
            <Link to={item === "work" ? `/#work` : `/${item}`}>
              <motion.p whileHover={{ rotate: index % 2 === 0 ? 5 : -5 }}>
                {item === "" ? "work" : item}
              </motion.p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </Nav>
  )
}

const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background: ${black};
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

      p {
        margin: 0;
      }
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

      li:hover:nth-of-type(odd):hover {
        transform: scale(1.05) rotate(-4deg);
      }

      li:nth-of-type(even):hover {
        transform: scale(1.05) rotate(4deg);
      }
    }
  }
`

export default Navigation
