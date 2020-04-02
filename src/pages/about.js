import React, { useEffect, useContext, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { dark_blue } from "../variables"
import { motion } from 'framer-motion'
import AboutHero from '../components/about/aboutHero'
import WeAreSection from '../components/about/weAreSection'
import AboutCard from '../components/about/aboutCard'

export const query = graphql`
  {
  allPrismicAbout{
    edges{
      node{
        data{
          title{
            text
          }
          description{
            html
          }
          we_are{
            content{
              text
            }
          }
          quote{
            text
          }
          quote_author{
            text
          }
        }
      }
    }
  }
}
`
// Comment me out once about content is populated
const people = ['sae', 'arlyn', 'ian', 'sophie', 'louis', 'steve', 'leeann', 'david', 'judith', 'rachelle', 'marissa', 'kitty', 'patrick', 'leeann']

const AboutPage = ({ data }) => {
  const { setCursorElement } = useContext(myContext)
  const [isSelected, setIsSelected] = useState(null);

  const { title, description, we_are } = data.allPrismicAbout.edges[0].node.data

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])


  return (
    <>
      <SEO title="About" />
      <AboutHero title={title} description={description} />
      <WeAreSection weAre={we_are} />
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
    </>
  )
}

export default AboutPage

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

