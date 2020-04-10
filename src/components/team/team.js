import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { dark_blue, breakpointMedium } from "../../variables"
import { motion } from 'framer-motion'
import MemberCard from './memberCard'

const Team = () => {
  const [isSelected, setIsSelected] = useState(null);

  const data = useStaticQuery(graphql`
    {
  allPrismicTeam{
    edges{
      node{
        data{
          member{
            name{
              text
            }
            role{
              text
            }
            fun_fact{
              text
            }
            profile_picture{
              localFile{
                childImageSharp{
                  fluid(quality: 90){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `)

  const { member } = data.allPrismicTeam.edges[0].node.data

  // TODO : Make drag onContraints the size of the team container

  return (
    <TeamContainer>
      <motion.div
        drag={isSelected ? false : true}
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        animate={{
          x: isSelected && 0,
          y: isSelected && 0
        }}
        dragElastic={0.3}
        className="grid-container">
        {member.map((person, i) => (
          <MemberCard
            key={i}
            index={i + 1}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            person={person}
          />
        ))}
      </motion.div>
    </TeamContainer>
  )
}

export default Team

const TeamContainer = styled.section`
  height: calc(100vh);
  width: 100vw;
  background: ${dark_blue};
  overflow: hidden;
  display: none;
  place-content: center;
  position: relative;

  .grid-container{
    padding: 10vh;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260.25px, 1fr));
    grid-auto-rows: 363px;
    grid-gap: 50px;
    place-items: center;
    position: static;
  }

  @media(min-width: ${breakpointMedium}){
    display: grid;
  }
`;

