import React from "react";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shivang-mishra-46b440a9/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/shivang-developer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://stackoverflow.com/users/5242864/mr-bean" target="_blank">
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
