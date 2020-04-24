import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import AboutHero from '../components/about/aboutHero'
import WeAreSection from '../components/about/weAreSection'
import AboutQuote from '../components/about/aboutQuote'
import ClientList from '../components/about/clientList'

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
          quotes{
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
}
`

const AboutPage = ({ data }) => {

  const { title, description, we_are, quotes } = data.allPrismicAbout.edges[0].node.data

  return (
    <>
      <SEO title="About" />
      <AboutHero title={title} description={description} />
      <WeAreSection weAre={we_are} />
      <AboutQuote quotes={quotes} />
      <ClientList />
    </>
  )
}

export default AboutPage

