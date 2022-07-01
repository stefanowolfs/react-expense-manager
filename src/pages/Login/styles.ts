import styled from "styled-components";
import Colors from "../../styles/colors";

export const Container = styled.div`
  min-width: 100px;
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
