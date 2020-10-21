import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import AboutHero from "../components/about/aboutHero"
// import Team from "../components/about/team"
import Team from "../components/team/team"
import AboutQuote from "../components/about/aboutQuote"
import ClientList from "../components/about/clientList"

export const query = graphql`
  {
    allPrismicAbout {
      edges {
        node {
          data {
            title {
              text
            }
            description {
              html
            }
            we_are {
              content {
                text
              }
            }
            quotes {
              quote {
                text
              }
              quote_author {
                text
              }
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const {
    title,
    description,
    we_are,
    quotes,
  } = data.allPrismicAbout.edges[0].node.data

  return (
    <>
      <SEO title="About" />
      <AboutHero title={title} description={description} weAre={we_are} />
      {/* <Team /> */}
      <AboutQuote quotes={quotes} />
      <ClientList />
    </>
  )
}

export default AboutPage
