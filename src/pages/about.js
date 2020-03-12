import React, { useEffect, useContext, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { yellow } from "../variables"
import { motion } from 'framer-motion'
import AboutCard from '../components/aboutCard'
import AboutFeature from '../components/aboutFeature'

export const query = graphql`
  {
    allPrismicAbout {
      edges {
        node {
          data {
            title {
              text
            }
            page_description {
              text
            }
          }
        }
      }
    }
  }
`
// Comment me out once about content is populated
const people = ['sae', 'arlyn', 'ian', 'louis', 'steve', 'leeann', 'david', 'judith', 'rachelle', 'marissa', 'kitty', 'patrick', 'leeann']

const AboutPage = ({ data }) => {
  const { setCursorElement } = useContext(myContext)
  const [isSelected, setIsSelected] = useState(null);

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="About" />
      <AboutHero>
        <motion.div
          drag={isSelected ? false : true}
          dragConstraints={{ top: -300, left: -400, right: 400, bottom: 300 }}
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


        <AboutFeature
          setIsSelected={setIsSelected}
          person={people[isSelected - 1]}
          isSelected={isSelected}
        />


      </AboutHero>
    </Layout>
  )
}

export default AboutPage

const AboutHero = styled.section`
  height: calc(100vh - 7vh);
  width: 100%;
  background: ${yellow};
  overflow: hidden;
  display: grid;
  place-content: center;
  position: relative;

  .grid-container{
    height: 120vh;
    width: 120vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 100px;
  }
`;

