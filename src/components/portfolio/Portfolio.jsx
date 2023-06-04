import React from "react";
import "./portfolio.css";
import IMG_1 from "../../assets/portfolio1.jpg";
import IMG_2 from "../../assets/portfolio2.jpg";
import IMG_3 from "../../assets/portfolio3.jpg";
import IMG_4 from "../../assets/portfolio4.jpg";
import IMG_5 from "../../assets/portfolio5.png";
import IMG_6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG_1,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG_2,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG_3,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG_4,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG_5,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG_6,
    title: "Crypto project",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <>
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
