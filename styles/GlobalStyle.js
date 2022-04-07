import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,body{
  background-color:#E0E0E0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  line-height:1.5;
  letter-spacing: -0.02em;
}
`;
