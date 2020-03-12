import React from 'react'
import styled from 'styled-components'
import { dark_blue, light_blue, white } from '../../variables'

const WeDoItAllSection = ({ we_do_it_all }) => {
  return (
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
  )
}

export default WeDoItAllSection


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
      font-size: 17px;
      font-weight: 700;
      letter-spacing: 0.07em;
      text-transform: uppercase;
    }
  }
`;
