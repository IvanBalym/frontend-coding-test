import type React from "react";
import { StyledHeader } from "./Styled/Header.styled";
import TimerDisplay from "../Timer/timerDisplay";

const Header: React.FC = () => (
  <StyledHeader>
    <TimerDisplay />
  </StyledHeader>
);

export default Header;
