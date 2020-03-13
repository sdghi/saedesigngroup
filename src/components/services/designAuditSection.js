import React from 'react'
import styled from 'styled-components'
import { pink, dark_blue, breakpointMedium } from '../../variables'

const DesignAuditSection = ({ design_audit }) => {
  return (
    <DesignAudit className="design-audit">
      <img className="design-audit-header" src={"/new-item.svg"} alt="new item" />
      <img src={"/design-audit.svg"} alt="design audit" />
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
  )
}

export default DesignAuditSection;


const DesignAudit = styled.section`
  padding: 50px 20px 20px 20px;
  border: 4px solid ${pink};
  border-radius: 19.41px;
  position: relative;

  .design-audit-header{
    position: absolute;
    top: -75px;
    left: 25%;
    height: 150px;
    width: 40%;
  }

  @media(min-width: ${breakpointMedium}){
    .design-audit-header{
    top: -75px;
    left: 15%;
    height: 150px;
    width: 70%;
  }
  }

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
    letter-spacing: 0.1em;
    margin: 10px 0;
  }

  .design-audit-content{
    margin-top: 33px;

    h3{
      color: ${pink};
      font-size: 15px;
     letter-spacing: 0.15em;
    }

    p{
      font-size: 14px;
      line-height: 20px;
    }

    div{
      margin-bottom: 20px;
    }
  }

`;