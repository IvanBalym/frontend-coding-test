import React from "react";
import Burger from "./burger";
import SideMenu from "./sideMenu";

export const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <SideMenu open={open} />
    </div>
  );
};

export default NavBar;
