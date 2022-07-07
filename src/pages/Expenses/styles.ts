import styled from "styled-components";
import Colors from "../../styles/colors";

export const Container = styled.div`
  margin: auto;
  margin-bottom: 0px;
  margin-top: 0px;

  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  background: ${Colors.white};
`;

export const GraphContainer = styled.div`
  margin: 0;
  margin-top: 100px;
`;

export const DashboardContainer = styled.div`
  margin: 0;
  margin-top: 100px;
  flex: 1;
`;
