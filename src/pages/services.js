import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from "../provider"
import styled from 'styled-components'
import { light_blue, dark_blue, yellow, pink, white, altFont, breakpointMedium, breakpointSmall, breakpointLarge } from '../variables'

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
        <MainMenu className="menu-main">
          {mainMenu.map(service => (
            // Adds the name of the feature as a classname to use as a grid area  
            <div key={service.id} className={service.primary.title.text.toLowerCase()}>
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
        <DesignAudit className="design-audit">
          <img src="design-audit.svg" />
          <hr />
          <h4>IT MAY BE TIME TO LOOK AT YOUR
BRAND WITH A CRITICAL EYE </h4>
          <hr />
          <div className="design-audit-content">
            {design_audit.map((audit, index) => (
              <div key={index}>
                <h3>{audit.title.text}</h3>
                <p>{audit.description.text}</p>
              </div>
            ))}
          </div>
        </DesignAudit>
        <WeDoItAll className="do-it-all">
          <div className="we-do-it-all-heading">
            <h2>We do it all!</h2>
            <h4>Mostly!</h4>
          </div>
          <div className="we-do-it-all-container">
            {we_do_it_all.map((item, index) => (
              <h4 key={index}>{item.industries.text}</h4>
            ))}
          </div>
        </WeDoItAll>
        <MenuFooter className="menu-footer">
          <div className="left">
            <h3 className="footer-cta">WHO YOU GOING CALL?</h3>
            <hr />
            <div className="footer-main">
              <div className="phone-number">
                <h2><a href="tel:808-249-2200">808-249-2200</a></h2>
                <h4>SERVING ALL ISLANDS & BEYOND</h4>
              </div>
              <div className="address">
                <div>
                  <h4>MAUI OFFICE</h4>
                  <a href="https://www.google.com/maps/place/Sae+Design/@20.88517,-156.507419,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d3695222c4ef:0xed333bfc689c52db!8m2!3d20.885165!4d-156.505225">2261 Aupuni St # 101, Wailuku, Hi 96793</a>
                </div>
                <div>
                  <h4>‘OAHU OFFICE</h4>
                  <a href="https://www.google.com/maps/place/555+South+St+%23+108,+Honolulu,+HI+96813/@21.3010374,-157.8602161,19.86z/data=!4m5!3m4!1s0x7c006e0bd43706f7:0x8fb115c33548023e!8m2!3d21.301411!4d-157.8602513">555 South Street #108, Honolulu, Hi 96813</a>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="right">
            <img src="menu-face.svg" alt="sdg menu face" />
          </div>
        </MenuFooter>
      </MenuContainer>
    </Layout>
  )
}

export default ServicesPage

const MenuFooter = styled.div`
  hr{
    /* Override the other borders  */
    border: none;
    border-bottom: 4px solid ${dark_blue};
    margin: 0;
  }

  h2,
  h3,
  h4{
    margin: 0;
  }

  .footer-cta{
    font-size: 40px;
    color: ${pink};
    text-align: center;
  }

  .phone-number{
    text-align: center;
    margin-bottom: 14px;

    h2{
      font-size: 46px;

      a{
        color: ${dark_blue};
      }
    }

    h4{
      font-size: 17px;
      color: ${pink};
      letter-spacing: 0.2rem;
    }
  }

  .address{
    text-align: center;

    div{
      margin-bottom: 14px;

      a{
        color: ${dark_blue};

        &:hover{
          color: ${pink};
        }
      }
    }
  }

  .footer-main{
    padding: 21px 0;
  }

  .right{
    width: fit-content;
    margin:  24px auto 0 auto;
  }

  @media(min-width: 1100px){
    display: inline-grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 40px;


    .right{
      display: grid;
      place-items: center;
      margin: 0;
    }
  
    .footer-cta{ 
      font-size: 56px;
    }

    .footer-main{
      display: flex;
      justify-content: space-between;

      .phone-number{
        text-align: left;

        h2{
          font-size: 64px;

          &:hover{
            a{
              color: ${light_blue};
            }
          }
        }
        h4{
          font-size: 24px;
        }
      }

      .address{
        text-align: left;
      }
    }
  }

  @media(min-width: ${breakpointMedium}){
    .footer-cta{
      font-size: 50px;
    }
  }

  @media(min-width: 2560px){
    .footer-cta{
      font-size: 36px;
    }

    .footer-main{
      display: block;

      .phone-number{
        text-align: center;
      }

      .address{
        display: flex;
        padding: 15px 20px 0 20px;
      }
    }
  }
`;

const MenuContainer = styled.div`
  margin: 10vh auto 0 auto;
  padding: 18.5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  h2{
    font-family: ${altFont};
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
      font-size: 13px;
      font-weight: 300;
      line-height: 1.4;
    }


    @media(min-width: 1100px){
      margin: 10vh auto 0 auto;
      grid-template-columns: 2fr 330px;
      grid-template-rows: 1fr 1fr 0.5fr;
      width: 100%;
      grid-template-areas: 
        "main audit"
        "main doit"
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


    @media(min-width: 2560px){
      max-width: 2300px;
      grid-template-columns: 1382px 1fr 1fr;
      grid-template-rows: 1.5fr  0.5fr;
      grid-template-areas: 
        "main audit doit"
        "main menuFoot menuFoot"
    }
`;


const MainMenu = styled.section`
  padding: 43px 30px 30px 30px;
  border: 4px solid ${dark_blue};
  border-radius: 19.41px;
  display: grid;
  place-content: center;
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

  p{
    font-weight: 300;
  }

  @media(min-width:2560px){
    h2{
      font-size: 36px;
    }

    .service-item{
      .service-title{
        font-size: 19px;
      }

      p{
        font-size: 17px;
      }
    }
  }

  .service-item{
    margin-bottom: 18px;

    h3{
      color: ${dark_blue};
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
      color: ${dark_blue};
      font-weight: 700;
    }
  }

  @media(min-width: ${breakpointSmall}){
    justify-content: center;
    display: grid;
    grid-template-columns: 270px 270px;
    grid-template-rows: repeat(4, 220px);
    grid-gap: 20px 60px ;
    grid-template-areas: 
      "branding packaging"
      "branding marketing"
      "print digital"
      "print sides";

      .branding{
        grid-area: branding;
      }

      .packaging{
        grid-area: packaging;
      }

      .print{
        grid-area: print;
      }

      .add-a-side-of{
        grid-area: sides;
      }

      .digital{
        grid-area: digital;
      }
  }

  @media(min-width: ${breakpointLarge}){
    grid-template-columns: repeat(3, 270px);
    grid-template-rows: repeat(6, 100px);
    justify-content: center;
    grid-gap: 45px 90px;
    grid-template-areas: 
      "branding packaging marketing"
      "branding packaging marketing"
      "branding print digital"
      "branding print digital"
      "branding print sides"
      ". print sides "
  }

  @media(min-width: 2560px){
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: 150px 150px  1fr;
    grid-template-areas: 
      "branding packaging marketing"
      "branding print digital"
      "sides sides sides"

      h2{
      font-size: 36px;
    }

    .service-item{
      .service-title{
        font-size: 19px;
      }

      p{
        font-size: 17px;
      }
    }
  }
`;

const DesignAudit = styled.section`
  padding: 20px;
  border: 4px solid ${pink};
  border-radius: 19.41px;

  img{
    width: 100%;
  }
  
  hr{
   border: 1px solid ${dark_blue};
  }

  h4{
    text-align: center;
    font-size: 13px;
    margin: 0;
    line-height: 18px;
    letter-spacing: 0.153rem;
    margin: 10px 0;
  }

  .design-audit-content{
    margin-top: 33px;

    h3{
      color: ${pink};
    }

    div{
      margin-bottom: 20px;
    }
  }

`;

const WeDoItAll = styled.section`
  padding: 0 0 50px 0;
  border: 4px solid ${dark_blue};
  border-radius: 19.41px;
  background: ${light_blue};


  .we-do-it-all-heading{
    padding: 27px 0;

    h2,
    h4{
      text-align: center;
      margin: 0;
      text-transform: uppercase;
    }

    h2{
      font-size: 36px;
      font-weight: 500;
    }

    h4{
      font-weight: 700;
      color: ${white};
      font-size: 21px;
    }
  }

  .we-do-it-all-container{
    padding: 27px;
    background-image: url('curved-bg.svg');
    background-repeat: no-repeat;
    height: fit-content;
    background-size: cover;

    h4{
      margin: 0;
      line-height: 1.75;
      text-align: center;
    }
  }


`;