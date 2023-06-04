import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { register } from "swiper/element/bundle";
register();

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente, nostrum labore quasi porro mollitia doloremque neque magni quod quis ullam natus nam aliquid dignissimos quisquam illo, deleniti sit esse?",
  },
  {
    avatar: AVTR2,
    name: "Kaam Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente, nostrum labore quasi porro mollitia doloremque neque magni quod quis ullam natus nam aliquid dignissimos quisquam illo, deleniti sit esse?",
  },
  {
    avatar: AVTR3,
    name: "Ram Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente, nostrum labore quasi porro mollitia doloremque neque magni quod quis ullam natus nam aliquid dignissimos quisquam illo, deleniti sit esse?",
  },
  {
    avatar: AVTR4,
    name: "Shyam Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente, nostrum labore quasi porro mollitia doloremque neque magni quod quis ullam natus nam aliquid dignissimos quisquam illo, deleniti sit esse?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <swiper-container
        className="container testimonial__container"
        pagination="true"
        slides-per-view="1"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <swiper-slide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </section>
  );
};

export default Testimonial;
