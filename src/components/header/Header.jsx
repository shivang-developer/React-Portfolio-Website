import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Shivang Mishra</h1>
        <TypeAnimation
          sequence={[
            "iOS Developer",
            2000,
            "FrontEnd Developer",
            2000,
            "Backend Developer",
            2000,
            "React Developer",
            2000,
          ]}
          speed={50}
          className="header__animation"
          wrapper="span"
          repeat={Infinity}
        />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
