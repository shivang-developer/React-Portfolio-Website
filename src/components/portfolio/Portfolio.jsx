import React from "react";
import "./portfolio.css";
import OLX_IMG from "../../assets/olx.png";
import IMG_2 from "../../assets/uber.png";
import IMG_3 from "../../assets/portfolio3.jpg";
import IMG_4 from "../../assets/portfolio4.jpg";
import IMG_5 from "../../assets/portfolio5.png";
import IMG_6 from "../../assets/portfolio6.jpg";
import IMG_BOOKING from "../../assets/booking.jpeg";
import IMG_JUSTEZ from "../../assets/justez.png";
import IMG_PORTFOLIO from "../../assets/PORTFOLIO.png";
import IMG_udown from "../../assets/udowwn.png";
import IMG_typtap from "../../assets/typtapp.jpeg";
import IMG_GIZMO from "../../assets/gizmo.png";

const data = [
  {
    id: 1,
    image: OLX_IMG,
    title: "OLX",
    btn1_title: "AppStore",
    btn1_Action:
      "https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792",
  },
  {
    id: 2,
    image: IMG_2,
    title: "Uber 2.0",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/UberClone",
  },
  {
    id: 3,
    image: IMG_BOOKING,
    title: "Booking.com 2.0",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/UberClone",
  },
  {
    id: 4,
    image: IMG_PORTFOLIO,
    title: "React Portfolio Website",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/React-Portfolio-Website",
  },
  {
    id: 5,
    image: IMG_udown,
    title: "uDown",
    btn1_title: "AppStore",
    btn1_Action: "https://apps.apple.com/us/app/udown/id1592827217",
  },
  {
    id: 6,
    image: IMG_6,
    title: "School Mgmnt APIs",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/School-API",
  },
  {
    id: 7,
    image: IMG_3,
    title: "React Native Chat App",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/FirebaseChatApp",
  },
  {
    id: 8,
    image: IMG_5,
    title: "Product Mngmt APIs",
    btn1_title: "Github",
    btn1_Action: "https://github.com/shivang-developer/HelloNodeJS",
  },
  {
    id: 9,
    image: IMG_GIZMO,
    title: "Gizmo hub",
    btn1_title: "Github",
    btn1_Action: "https://apps.apple.com/in/app/gizmohub/id921596283",
  },
  {
    id: 10,
    image: IMG_JUSTEZ,
    title: "JustEZ",
    btn1_title: "AppStore",
    btn1_Action: "https://apps.apple.com/us/app/justez/id1147082614",
  },
  {
    id: 11,
    image: IMG_4,
    title: "Matchstix",
    btn1_title: "AppStore",
    btn1_Action: "https://apps.apple.com/in/app/gizmohub/id921596283",
  },
  {
    id: 12,
    image: IMG_typtap,
    title: "Typtap Policyholder",
    btn1_title: "AppStore",
    btn1_Action: "hhttps://apps.apple.com/us/app/typtap/id1610860087",
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
                  </div>
                </article>
              </>
            );
          }
        )}
      </div>
      <h3 className="portfolio__bottom">&... 12+ More Projects</h3>
    </section>
  );
};

export default Portfolio;
