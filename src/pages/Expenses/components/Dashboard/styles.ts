import styled from "styled-components";
import Colors from "../../../../styles/colors";

export const Container = styled.div`
  margin: auto;
  min-height: 600px;
  min-width: 300px;

  flex: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${Colors.ice};
`;
