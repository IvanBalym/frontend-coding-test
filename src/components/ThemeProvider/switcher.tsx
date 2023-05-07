import type React from "react";
import { useContext, useState } from "react";
import type { IThemesKeys } from "./../../interfaces";
import StyledSwitcher from "./Styled/Switcher.styled";
import { ThemeContext } from "./themeContext";

const Switcher: React.FC = () => {
  const { setTheme } = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState<IThemesKeys>("default");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCurrentTheme(inputValue as IThemesKeys);
    setTheme(inputValue as IThemesKeys);
  };

  return (
    <StyledSwitcher>
      <input
        type="radio"
        id="toggle3radio1"
        className="radio1"
        value="light"
        checked={currentTheme === "light"}
        onChange={handleRadioChange}
      />
      <input
        type="radio"
        id="toggle3radio2"
        className="radio2"
        value="default"
        checked={currentTheme === "default"}
        onChange={handleRadioChange}
      />
      <input
        type="radio"
        id="toggle3radio3"
        className="radio3"
        value="dark"
        checked={currentTheme === "dark"}
        onChange={handleRadioChange}
      />
      <span className="sliderContainer">
        <span className="slider"></span>
      </span>
      <div className="topLabelContainer">
        <label className="labelTop1" htmlFor="toggle3radio1">
          Light
        </label>
        <label className="labelTop2" htmlFor="toggle3radio2">
          Default
        </label>
        <label className="labelTop3" htmlFor="toggle3radio3">
          Dark
        </label>
      </div>
    </StyledSwitcher>
  );
};

export default Switcher;
