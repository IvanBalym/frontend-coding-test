import type React from "react";
import { bool, func } from "prop-types";
import type { IBurger } from "./../../interfaces";
import { StyledBurger } from "./Styled/Burger.styled";

const Burger: React.FC<IBurger> = ({ open, setOpen }) => {
  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger open={open} onClick={handleBurgerClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
