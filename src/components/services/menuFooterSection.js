import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { light_blue, dark_blue, pink, breakpointMedium, breakpointTablet, breakpoint4k, oswald, darkYellow, black } from '../../variables'
import { HeadingTwo } from '../../elements'

const MenuFooterSection = () => {
  return (
    <MenuFooter className="menu-footer">
      <div className="left">
        <h3 className="footer-cta">WHO YOU GOING CALL?</h3>
        <hr />
        <div className="footer-main">
          <div className="quote-info">
            <HeadingTwo fontSize="24px" fontSizeMd="26px" color={light_blue}>for Quotes & more info:</HeadingTwo>
            <p>Tell us about your project and needs. Let’s get to know each other a little better. Then we’ll create a proposal made specifically for you. And if you like where things are going, maybe we could start  a relationship…</p>
          </div>
          <div className="contact-info">
            <Link to="/contact">Contact Us</Link>
            <span>contact info / locations / map</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="right">
        <img src={"/menu-face.svg"} alt="sdg menu face" />
      </div>
    </MenuFooter>
  )
}

export default MenuFooterSection


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
    font-size: 30px;
    color: ${pink};
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 0.04em;
  }

  .footer-main{
    padding: 21px 15px;

    a{
      width: 100%;
      background: ${darkYellow};
      border-radius: 10px;
      text-align: center;
      padding: 11px 0;
      font-size: 26px;
      font-weight: 600;
      margin-top: 15px;
      margin-bottom: 13.4px;
      color: ${black};
    }

    ${HeadingTwo},
    a{
    text-transform: uppercase;
    font-family: ${oswald};
    font-weight: 600;
  }

  .quote-info{
    p{
      font-size: 15px;
      line-height: 1.5333
    }
  }

    .contact-info{
      display: flex;
      flex-direction: column;

      span{
        margin: 0 auto;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 11px;
        color: ${pink};
        letter-spacing: 0.09em;
      }
    }
  }

  .right{
    width: fit-content;
    margin:  24px auto 0 auto;
  }

  @media(min-width: ${breakpointTablet}){
    display: inline-grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 40px;


    .right{
      display: grid;
      place-items: center;
      margin: 0;
    }
  
    .footer-cta{ 
      font-size: 35px;
    }

    .footer-main{
      display: grid;
      grid-template-columns: 425px 1fr;
      grid-gap: 50px;
      align-items: center;

      a{
        margin-top: 0;
      }
    }
  }


  @media(min-width: ${breakpoint4k}){
    .footer-cta{
      margin-bottom: 14px;
    }
  
    .footer-main{
      display: block;

      a{
        margin-top: 12px;
      }
    }
  }
`;