import type React from "react";
import { bool } from "prop-types";
import type { IMenu } from "../../interfaces";
import Switcher from "../ThemeProvider/switcher";
import StyledSideMenu from "./Styled/SideMenu.styled";

const SideMenu: React.FC<IMenu> = ({ open }) => (
  <StyledSideMenu open={open}>
    <a href="/">About us</a>
    <a href="/">Contact</a>
    <Switcher />
  </StyledSideMenu>
);

SideMenu.propTypes = {
  open: bool.isRequired,
};

export default SideMenu;
