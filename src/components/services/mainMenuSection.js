import React from 'react'
import styled from 'styled-components'
import { dark_blue, light_blue, yellow, breakpointSmall, breakpointLarge } from '../../variables'

const MainMenuSection = ({ mainMenu, add_a_side_of }) => {
    return (
        <MainMenu className="menu-main">
            <img className="menu-of-services-header" src="menu-of-services.svg" alt="menu of services" />
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
    )
}

export default MainMenuSection;


const MainMenu = styled.section`
  position: relative;
  padding: 43px 30px 30px 30px;
  border: 4px solid ${dark_blue};
  border-radius: 19.41px;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  .menu-of-services-header{
    position: absolute;
    top: -100px;
    width: 50%;
    height: 200px;
    left: 25%;
    z-index: 1;
  }

  h2,
  h3,
  p{
    position: relative;
    z-index: 10;
  }

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