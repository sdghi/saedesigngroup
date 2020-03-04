import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'

export const query = graphql`
{
  allPrismicMenuOfServices {
    edges {
      node {
        data {
       		body{
            ... on PrismicMenuOfServicesBodyMainMenuItem{
              primary{
                title{
                  text
                }
              }
              items{
                feature_title{
                  text
                }
                feature_description{
                  text
                }
              }
            }
          }
          add_a_side_of {
            title {
              text
            }
          }
          design_audit {
            title {
              text
            }
            description {
              text
            }
          }
          we_do_it_all {
            industries {
              text
            }
          }
        }
      }
    }
  }
}
`

const ServicesPage = ({ data }) => {
  const { setCursorElement } = useContext(myContext)

  const { body: mainMenu, add_a_side_of, design_audit, we_do_it_all } = data.allPrismicMenuOfServices.edges[0].node.data;


  useEffect(() => {
    setCursorElement({ initial: "initial" })
    console.log({ we_do_it_all })
  }, [setCursorElement])

  return (
    <Layout>
      <SEO title="Services" />
      <MenuContainer>
        <MainMenu>
          {mainMenu.map(service => (
            <div key={service.id}>
              <h2>{service.primary.title.text}</h2>

              {service.items.map((item, index) => (
                <div key={index}>
                  <h3>{item.feature_title.text}</h3>
                  <p>{item.feature_description.text}</p>
                </div>
              ))}
            </div>
          ))}
          <div className="add-a-side-of">
            <h2>Add A Side Of</h2>
            {add_a_side_of.map((side, index) => (
              <p key={index}>{side.title.text}</p>
            ))}
          </div>
        </MainMenu>
        <DesignAudit>
          <div>
            {design_audit.map((audit, index) => (
              <div key={index}>
                <h3>{audit.title.text}</h3>
                <p>{audit.description.text}</p>
              </div>
            ))}
          </div>
        </DesignAudit>
        <WeDoItAll>
          <div>
            {we_do_it_all.map((item, index) => (
              <p key={index}>{item.industries.text}</p>
            ))}
          </div>
        </WeDoItAll>
      </MenuContainer>
    </Layout>
  )
}

export default ServicesPage

const MenuContainer = styled.div`
`;

const MainMenu = styled.section`
  padding: 20px;
  border: 1px solid red;

  .add-a-side-of{
    border: 1px solid green;
  }
`;

const DesignAudit = styled.section`
  padding: 20px;
  border: 1px solid blue;
`;

const WeDoItAll = styled.section`
  padding: 20px;
  border: 1px solid orange;
`;