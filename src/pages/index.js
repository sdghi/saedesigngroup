import React from "react"
import { Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectImageWithTitle from '../components/projectImageWithTitle'

export const query = graphql`
{
  allPrismicProjectTemplate {
    edges {
      node {
        uid
        data {
          project_name {
            text
          }
          featured_image {
            alt
            url
            localFile {
              childImageSharp {
                fluid{
                  srcSet
                }
                fixed{
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({data}) => {
  const projects = data.allPrismicProjectTemplate.edges; 
 
  return(
  <Layout>
    <SEO title="Home" />
    <section>
      {projects.map(project => (
        <ProjectImageWithTitle key={project.node.uid} project={project}/>
      ))}
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
