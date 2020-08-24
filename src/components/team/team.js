import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { dark_blue, white, yellow } from "../../variables"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import MemberCard from "./memberCard"

const Team = () => {
  const [isSelected, setIsSelected] = useState(null)

  const data = useStaticQuery(graphql`
    {
      allPrismicTeam {
        edges {
          node {
            data {
              member {
                name {
                  text
                }
                role {
                  text
                }
                fun_fact {
                  text
                }
                profile_picture {
                  fluid(maxWidth: 500) {
                    ...GatsbyPrismicImageFluid
                  }
                  alt
                }
              }
            }
          }
        }
      }
    }
  `)

  const { member } = data.allPrismicTeam.edges[0].node.data

  return (
    <TeamContainer>
      <AnimateSharedLayout type="crossfade">
        <motion.div className="grid-container">
          {member.map((person, i) => (
            <MemberCard
              key={i}
              index={i}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              person={person}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {isSelected && (
            <Selected
              member={member}
              setIsSelected={setIsSelected}
              isSelected={isSelected}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </TeamContainer>
  )
}

export default Team

const Selected = ({ isSelected, setIsSelected, member }) => {
  const selectedMember = member.find(({ name }) => name.text === isSelected)

  function resetCard() {
    setIsSelected(null)
  }
  return (
    <SelectedCard
      layoutId={isSelected}
      onTap={resetCard}
      animate={{
        rotateY: 180,
      }}
      exit={{
        rotateY: 180,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-inner">{selectedMember.name.text}</div>
    </SelectedCard>
  )
}

const SelectedCard = styled(motion.div)`
  --height: 50vh;
  --width: 400px;
  padding: 20px;
  background: ${white};
  position: absolute;
  height: var(--height);
  width: var(--width);
  top: calc(50% - (var(--height) / 2));
  left: calc(50% - var(--width) / 2);
  z-index: 50;

  .content-inner {
    height: 100%;
    width: 100%;
    background: ${yellow};
    transform: rotateY(180deg);
  }
`

const TeamContainer = styled.section`
  background: ${dark_blue};
  position: relative;
  width: 100%;

  .grid-container {
    padding: 10vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 50px;
    place-content: center;
  }
`
