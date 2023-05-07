import { memo, useState } from "react";
import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "./components/ThemeProvider/themeProvider";
import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Body from "./components/Body/body";
import { TimerContext } from "./components/Timer/timerContext";

function App() {
  const [seconds, setSeconds] = useState(15);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <NavBar />
      <TimerContext.Provider value={{ seconds, setSeconds }}>
        <Header />
        <Body />
      </TimerContext.Provider>
    </ThemeProvider>
  );
}

export default memo(App);
