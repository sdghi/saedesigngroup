import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { yellow } from "../variables"
import { motion } from 'framer-motion'
import AboutCard from '../components/aboutCard'

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
const people = ['david', 'arlyn', 'ian', 'louis', 'sae', 'steve', 'leeann', 'judith', 'rachelle', 'marissa', 'kitty', 'patrick', 'leeann']

const AboutPage = ({ data }) => {
  const { title, page_description } = data.allPrismicAbout.edges[0].node.data

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="About" />
      <AboutHero>
        <motion.div drag dragConstraints={{ top: -150, left: -200, right: 200, bottom: 150 }} className="grid-container">
          {people.map((person, i) => (
            <AboutCard key={i} />
          ))}
        </motion.div>
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

  .grid-container{
    height: 120vh;
    width: 120vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;
  }
`;