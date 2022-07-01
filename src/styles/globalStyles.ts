import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;

    background: rgb(12, 93, 196);
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.palette.gradientBackground.color1} 0%,
      ${(props) => props.theme.palette.gradientBackground.color2} 100%
    );
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
