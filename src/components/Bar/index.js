import React from "react";
import LogoBar from "../LogoBar";
import NavBar from "../NavBar";
import { BackBar } from "./style";

const Bar = () => {
  return (
    <BackBar>
      <LogoBar />
			<NavBar/>
    </BackBar>
  );
};

export default Bar;
