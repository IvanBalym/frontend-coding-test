import { createContext } from "react";
import type { ITimerContext } from "./../../interfaces";

export const TimerContext = createContext<ITimerContext>({
  seconds: 15,
  setSeconds: (seconds) => seconds,
});
