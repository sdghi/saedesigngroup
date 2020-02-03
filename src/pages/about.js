import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-plugin-transition-link'
import Layout from "../components/Layout"
import SEO from "../components/seo"

export const query = graphql`
{
    allPrismicAbout{
        edges{
            node{
                data{
                    title{
                        text
                    }
                    page_description{
                        text
                    }
                }
            }       
        }
    }
}
`

const AboutPage = ({ data }) => {

    const { title, page_description } = data.allPrismicAbout.edges[0].node.data;

    return (
        <Layout>
            <SEO title="About" />
            <h1>{title.text}</h1>
            <p>{page_description.text}</p>
        </Layout>
    )
}

export default AboutPage
