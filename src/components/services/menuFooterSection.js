import React from 'react'
import styled from 'styled-components'
import { light_blue, dark_blue, pink, breakpointMedium } from '../../variables'

const MenuFooterSection = () => {
    return (
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