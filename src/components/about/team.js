import React, { useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { Container } from "../../elements"
import styled from "styled-components"

const Team = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const teamCards = [
    {
      name: "sae",
      role: "principal",
    },
    {
      name: "steve",
      role: "partner",
    },
    {
      name: "ian",
      role: "partner",
    },
    {
      name: "arlyn",
      role: "designer",
    },
    {
      name: "rachelle",
      role: "designer",
    },
    {
      name: "louis",
      role: "designer",
    },
    {
      name: "marissa",
      role: "designer",
    },
    {
      name: "david",
      role: "developer",
    },
  ]

  return (
    <TeamContainer margin="20vh auto">
      <AnimateSharedLayout type="crossfade">
        <div className="cards-container">
          {teamCards.map(({ name }, i) => (
            <motion.div
              className="team-card"
              layoutId={i}
              onClick={() => setSelectedCard(i)}
            >
              <h2 className="h2">{name}</h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div layoutId={selectedCard} className="selected-card">
              <h2>{teamCards[selectedCard].name}</h2>
              <p>{teamCards[selectedCard].role}</p>
              <motion.button onClick={() => setSelectedCard(null)}>
                close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </TeamContainer>
  )
}

export default Team

const TeamContainer = styled(Container)`
  position: relative;
  width: 100%;
  border: 1px solid red;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    .team-card {
      background: grey;
      height: 100%;
      width: 100%;
    }
  }

  .selected-card {
    --height: 500px;
    --width: 300px;
    position: absolute;
    background: red;
    height: 400px;
    width: 500px;
    top: calc(50% - (var(--height) / 2));
    left: calc(50% - var(--width));
  }
`
