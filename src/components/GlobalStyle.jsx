import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}


html {
    font-size: 62.5%;
    overflow-x: hidden;
}
 h1{
    font-size: 6rem;
    font-weight: 900;
 }
`;