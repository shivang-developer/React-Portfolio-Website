import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>iOS Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>iOS, iPad, WatchOS App Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface (UI) and User Experience (UX) Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom iOS Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Review and Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Legacy Code Migration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>App Maintenance and Support</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Third-Party API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Platform Development using React Native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping and Proof of Concept (POC)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Consultation and Technical Guidance</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single-Page Applications (SPAs)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Component Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Architecture and Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful & GraphQL API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>State Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Debugging</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Review and Refactoring</p>
            </li>
          </ul>
        </article>
        {/* End of  Web Development */}
        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend Architecture Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Development and Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Validation and Sanitization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Error Handling and Logging</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Caching and Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of Third-Party Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Test Automation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment and DevOps</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
