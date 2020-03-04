import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { light_blue, dark_blue, yellow, pink } from '../variables'

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
                <div key={index} className="service-item">
                  <h3 className="service-title">{item.feature_title.text}</h3>
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
  padding: 18.5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;

const MainMenu = styled.section`
  padding: 43px 30px 30px 30px;
  border: 4px solid ${dark_blue};
  border-radius: 19.41px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  h2{
    color: ${light_blue};
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.153em; 
    margin: 0 0 18px 0;
    text-transform: uppercase;
  }

  .service-item{
    margin-bottom: 18px;

    .service-title{
      font-size: 13px;
      letter-spacing: 0.2em;
      font-weight: 900;
      margin: 0;
      text-transform: uppercase;
    }

    p{
      margin: 0;
      font-size: 13px;
      font-weight: 300;
    }
  }

  .add-a-side-of{
    border: 4px solid ${yellow};
    border-radius: 13px;
    padding: 27px;

    h2{
      font-size: 18px;
      font-weight: 700;
      margin: 0;
      color: ${yellow};
    }

    p{
      margin: 0;
      line-height: 2.1;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;

const DesignAudit = styled.section`
  padding: 20px;
  border: 4px solid ${pink};
  border-radius: 19.41px;
`;

const WeDoItAll = styled.section`
  padding: 20px;
  border: 4px solid ${dark_blue};
  border-radius: 19.41px;
`;