import { createGlobalStyle } from "styled-components"
import { pink, baseFont } from "../../variables"

export const GlobalStyle = createGlobalStyle`

  html{
    box-sizing: border-box;
    font-family: ${baseFont};
  }

  *, *:before, *:after{
    box-sizing:inherit;
    cursor: none;
  }


  body{
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    user-select: none;
    transition: all .2s ease-out;

    &:hover{
      transition: all .2s ease-in;
      color: ${pink};
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }
  
  .tl-edges{
    overflow: visible;
  }

  *[role=button]{
    outline: none;
  }

  button:focus{
    outline-color: ${pink};
  }

  .btn_reset{
    border: 0;
    background: transparent;
    padding: 0;
  }

  .visually-hidden{
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

`
