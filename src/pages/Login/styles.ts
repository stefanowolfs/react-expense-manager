import styled from "styled-components";
import Colors from "../../styles/colors";

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  font-family: Open-Sans, Helvetica, Sans-Serif;
  margin: 0;
  padding: 0;

  background: rgb(12, 93, 196);
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.palette.gradientBackground.color1} 0%,
    ${(props) => props.theme.palette.gradientBackground.color2} 100%
  );
`;

export const Content = styled.div`
  min-width: 500px;
  min-height: 300px;
  max-width: 500px;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 100px;
  padding: 10px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${Colors.white};
`;
