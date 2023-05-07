import type React from "react";
import { StyledBody } from "./Styled/Body.styled";
import TimerLauncher from "../Timer/timerLauncher";

const Body: React.FC = () => (
  <StyledBody>
    <TimerLauncher />
  </StyledBody>
);

export default Body;
