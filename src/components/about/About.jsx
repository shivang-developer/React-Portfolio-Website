import React from "react";
import "./about.css";
import ME from "../../assets/abc.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWorkOutline, MdOutlineFastfood } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { CgGym } from "react-icons/cg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      {/*Experience*/}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        {/*Experience*/}
        <div className="about__content">
          <div className="about__cards">
            {/*Experience*/}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>8+ years Working</small>
            </article>
            {/*Experience*/}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            {/*Experience*/}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>
          <div className="about__contents">
            <article className="about__details">
              <FaLaptopCode className="about__details-icon" />
              <h5>
                Hello, I'm Shivang Mishra, an experienced IT professional with a
                passion for iOS app development since 2015.
              </h5>
            </article>
            <article className="about__details">
              <MdOutlineWorkOutline className="about__details-icon" />
              <h5 className="text-light">
                Currently, I work as a full-time employee at OLX, where I focus
                on developing and managing their iOS application.
              </h5>
            </article>
            <article className="about__details">
              <BiBookOpen className="about__details-icon" />
              <h5>
                In my free time, I enthusiastically delve into exploring new
                technologies and expanding my skills in frontend and backend
                development, as well as AI and ML.
              </h5>
            </article>
            <article className="about__details">
              <MdOutlineFastfood className="about__details-icon" />
              <h5>
                I find great joy in traveling to different countries, immersing
                myself in diverse cultures, and savoring delicious cuisines.
              </h5>
            </article>
            <article className="about__details">
              <CgGym className="about__details-icon" />
              <h5>
                Despite my busy schedule, I prioritize my fitness by engaging in
                sports and regularly hitting the gym.
              </h5>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
