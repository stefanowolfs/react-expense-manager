import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 40px;
  margin-right: 40px;
`;

export const Link = styled(NavLink)`
  margin: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
