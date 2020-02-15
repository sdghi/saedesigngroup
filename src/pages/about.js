import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"

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

const AboutPage = ({ data }) => {
  const { title, page_description } = data.allPrismicAbout.edges[0].node.data

  const { setCursorElement } = useContext(myContext)

  useEffect(() => {
    setCursorElement({ initial: "initial" })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="About" />
      <h1>{title.text}</h1>
      <p>{page_description.text}</p>
    </Layout>
  )
}

export default AboutPage
