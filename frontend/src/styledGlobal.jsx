import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #FFECE8;
    margin: 0;
    font-family:'Josefin Sans', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    
    code {
     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
     monospace;
    }
    
`

export const CorFundo = styled.body`
   background-color: #FFECE8;
`

