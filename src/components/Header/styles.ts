import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Toolbar as BaseToolbar, Typography } from "@mui/material";
import Colors from "../../styles/colors";

interface LinkProps {
  active?: boolean;
}

export const Toolbar = styled(BaseToolbar)`
  background: rgb(12, 93, 196);
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.palette.gradientBackground.color1} 0%,
    ${(props) => props.theme.palette.gradientBackground.color2} 100%
  );
`;

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 40px;
  margin-right: 40px;
`;

export const Link = styled<
  React.ForwardRefExoticComponent<
    LinkProps & NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >
>(NavLink)`
  margin: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: ${({ active }) => (active === true ? Colors.black : Colors.white)};
  font-size: 20px;
  margin-left: 20px;
  hover: {
    color: yellow;
    border-bottom: 1px solid white;
  }
`;

export const Title = styled(Typography)`
  flex-grow: 1;
  cursor: pointer;
`;
