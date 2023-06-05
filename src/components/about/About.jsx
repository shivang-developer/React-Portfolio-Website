import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
          <p>
            Hello, I'm Shivang Mishra, an experienced IT professional with a
            passion for iOS app development since 2015. <br /> Currently, I work
            as a full-time employee at OLX, where I focus on developing and
            managing their iOS application. <br /> In my free time, I
            enthusiastically delve into exploring new technologies and expanding
            my skills in frontend and backend development, as well as AI and ML.
            <br />
            I find great joy in traveling to different countries, immersing
            myself in diverse cultures, and savoring delicious cuisines. <br />
            Despite my busy schedule, I prioritize my fitness by engaging in
            sports and regularly hitting the gym.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
