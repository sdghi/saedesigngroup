import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { useAppContext } from "../provider"

import AboutHero from '../components/about/aboutHero'
import WeAreSection from '../components/about/weAreSection'

import AboutQuote from '../components/about/aboutQuote'
import Team from '../components/team/team'
import TeamMobile from '../components/team/teamMobile'
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
  const { setCursorElement } = useAppContext()

  const { title, description, we_are, quote, quote_author } = data.allPrismicAbout.edges[0].node.data

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])


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

