import React, { useState } from 'react'
import styled from 'styled-components'
import { dark_blue } from "../../variables"
import { motion } from 'framer-motion'
import AboutCard from './aboutCard'

const AboutTeam = ({ people }) => {
    const [isSelected, setIsSelected] = useState(null);

    return (
        <TeamContainer>
            <motion.div
                drag={isSelected ? false : true}
                dragConstraints={{ top: -100, left: -150, right: 150, bottom: 100 }}
                animate={{
                    x: isSelected && 0,
                    y: isSelected && 0
                }}
                dragElastic={0.3}
                className="grid-container">
                {people.map((person, i) => (
                    <AboutCard
                        key={i}
                        index={i + 1}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        person={person} />
                ))}
            </motion.div>
        </TeamContainer>
    )
}

export default AboutTeam

const TeamContainer = styled.section`
  height: calc(100vh);
  width: 100%;
  background: ${dark_blue};
  overflow: hidden;
  display: grid;
  place-content: center;
  position: relative;

  .grid-container{
    padding: 50px;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 100px;
    place-items: center;
    position: static;
  }
`;

