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

const AboutPage = ({ data }) => {

  const { title, description, we_are, quote, quote_author } = data.allPrismicAbout.edges[0].node.data

  return (
    <>
      <SEO title="About" />
      <AboutHero title={title} description={description} />
      <WeAreSection weAre={we_are} />
      <AboutQuote quote={quote} quoteAuthor={quote_author} />
      <ClientList />
    </>
  )
}

export default AboutPage

