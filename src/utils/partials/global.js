import { createGlobalStyle } from "styled-components"
import { breakpointMedium, pink, baseFont } from "../../variables"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500,600|Source+Sans+Pro:300,400,700,900&display=swap');

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
    margin: 7vh 0 0 0;
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

`
