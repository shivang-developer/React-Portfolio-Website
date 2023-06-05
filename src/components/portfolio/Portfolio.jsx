import React from "react";
import "./portfolio.css";
import OLX_IMG from "../../assets/olx.png";
import IMG_2 from "../../assets/portfolio2.jpg";
import IMG_3 from "../../assets/portfolio3.jpg";
import IMG_4 from "../../assets/portfolio4.jpg";
import IMG_5 from "../../assets/portfolio5.png";
import IMG_6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: OLX_IMG,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
  {
    id: 2,
    image: IMG_2,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "AppStore",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
  {
    id: 3,
    image: IMG_3,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "AppStore",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
  {
    id: 4,
    image: IMG_4,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "AppStore",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
  {
    id: 5,
    image: IMG_5,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "AppStore",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
  {
    id: 6,
    image: IMG_6,
    title: "OLX",
    btn1_title: "AppStore",
    btn2_title: "AppStore",
    btn1_Action: "https://github.com",
    btn2_Action: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            btn1_title,
            btn2_title,
            btn1_Action,
            btn2_Action,
          }) => {
            return (
              <>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={btn1_Action} className="btn" target="_blank">
                      {btn1_title}
                    </a>
                    {(btn2_title !== "") &
                    (
                      <a
                        href={btn2_Action}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        {btn2_title}
                      </a>
                    )}
                  </div>
                </article>
              </>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
