import type React from "react";
import { useContext } from "react";
import { StyledTimerDisplay } from "./Styled/timerDisplay.styled";
import { TimerContext } from "./timerContext";

const TimerDisplay: React.FC = () => {
  const { seconds } = useContext(TimerContext);

  return <StyledTimerDisplay>{seconds}</StyledTimerDisplay>;
};

export default TimerDisplay;
