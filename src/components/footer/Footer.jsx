import React from "react";
import "./footer.css";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div>
        <a href="#" className="footer__logo">
          SHIVANG MISHRA PORTFOLIO
        </a>
        <a href="#">(Made by me &#128513;)</a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linked.com">
          <BsLinkedin />
        </a>
        <a href="https://stackoverflow.com">
          <BsStackOverflow />
        </a>
        <a href="https:/github.com">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shivang Portfolio, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
