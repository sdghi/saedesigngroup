import { createGlobalStyle } from "styled-components"
import { breakpointMedium, pink, baseFont } from "../../variables"

export const GlobalStyle = createGlobalStyle`

  html{
    box-sizing: border-box;
    font-family: ${baseFont};
  }

  *, *:before, *:after{
    box-sizing:inherit;
  }

  @media(min-width: ${breakpointMedium}){
    *, *:before, *:after{
      /* Globally disables the cursor  */
      cursor: none;
    }
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

  .btn_reset{
    border: 0;
    background: transparent;
    padding: 0;
  }

`
