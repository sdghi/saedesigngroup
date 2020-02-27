import { createGlobalStyle } from "styled-components"
import { breakpointMedium } from "../../variables"

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: "Source Sans Pro", sans-serif;
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
    margin: 7vh 0 0 0;
    padding: 0;
  
  }

  a {
    text-decoration: none;
    user-select: none;
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

`
