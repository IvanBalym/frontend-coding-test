import type React from "react";
import { useState, useEffect, useContext } from "react";
import { TimerContext } from "./timerContext";
import { StyledTimerLauncher } from "./Styled/timerLauncher.styled";

const TimerLauncher: React.FC = () => {
  const [initialTime, ] = useState(15);
  const [timeRemaining, setRimeRemaining] = useState<number | null>(null);
  const { setSeconds } = useContext(TimerContext);

  useEffect(() => {
    if (timeRemaining !== null && timeRemaining > 0) {
      const timerId = setTimeout(() => {
        setRimeRemaining(timeRemaining - 1);
        setSeconds(timeRemaining - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [timeRemaining, setSeconds]);

  const handleStartTimerClick = () => {
    setRimeRemaining(initialTime);
    setSeconds(initialTime);
  };

  return (
    <StyledTimerLauncher onClick={handleStartTimerClick}>
      Start timer
    </StyledTimerLauncher>
  );
};

export default TimerLauncher;
