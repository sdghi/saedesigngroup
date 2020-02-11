import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: "Source Sans Pro", sans-serif;
  }

  *, *:before, *:after{
    box-sizing:inherit;
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
    overflow: initial;
  }

  *[role=button]{
    outline: none;
  }

`
