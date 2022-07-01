import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;

    background: rgb(12, 93, 196);
    background: linear-gradient(
      90deg,
      rgba(12, 93, 196, 1) 0%,
      rgba(67, 60, 124, 0.7903536414565826) 47%,
      rgba(204, 66, 147, 1) 100%
    );
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
