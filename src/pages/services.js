import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { altFont, breakpointSmall, breakpointTablet, breakpointLarge, breakpoint4k } from '../variables'
import MainMenuSection from '../components/services/mainMenuSection'
import DesignAuditSection from '../components/services/designAuditSection'
import WeDoItAllSection from '../components/services/weDoItAllSection'
import MenuFooterSection from '../components/services/menuFooterSection'
import TransitionWrapper from '../components/wrappers/transitionWrapper'

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
      <TransitionWrapper>
        <SEO title="Services" />
        <MenuContainer>
          <MainMenuSection mainMenu={mainMenu} add_a_side_of={add_a_side_of} />
          <DesignAuditSection design_audit={design_audit} />
          <WeDoItAllSection we_do_it_all={we_do_it_all} />
          <MenuFooterSection />
        </MenuContainer>
      </TransitionWrapper>
    </Layout>
  )
}

export default ServicesPage


const MenuContainer = styled.div`
  margin: 10vh auto 0 auto;
  padding: 18.5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  h2{
    font-family: ${altFont};
    font-size: 30px;
    letter-spacing: 0.075em;
  }

  h3{
      font-size: 13px;
      letter-spacing: 0.2em;
      font-weight: 900;
      margin: 0;
      text-transform: uppercase;
    }

    p{
      margin: 0;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px
    }

    @media(min-width: ${breakpointSmall}){
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 0.5fr 0.5fr;
      width: 100%;
      grid-template-areas: 
        "main main"
        "audit doit"
        "menuFoot menuFoot";

        .menu-footer{
          grid-area: menuFoot;
        } 

        .menu-main{
          grid-area: main;
        }

        .design-audit{
          grid-area: audit;
        }

        .do-it-all{
          grid-area: doit;
        }
    }


    @media(min-width: ${breakpointTablet}){
      margin: 10vh auto 0 auto;
      grid-template-columns: 2fr 330px;
      grid-template-rows: 1fr 1fr 0.5fr;
      width: 100%;
      grid-template-areas: 
        "main audit"
        "main doit"
        "menuFoot menuFoot";
    }

    @media(min-width: ${breakpointLarge}){
      width: 90%;
      max-width: 1470px;
      margin: 10vh auto 0 auto;
      grid-template-rows: 0.7fr 0.7fr 0.7fr 1fr;
      grid-template-areas: 
        "main audit"
        "main audit"
        "main audit"
        "main doit"
        "menuFoot doit"
        ;
    }


    @media(min-width: ${breakpoint4k}){
      max-width: 2300px;
      grid-template-columns: 1382px 1fr 1fr;
      grid-template-rows: 1.5fr  0.5fr;
      grid-template-areas: 
        "main audit doit"
        "main menuFoot menuFoot"
    }
`;

