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
    name: "Nidhi Chandel",
    review:
      "It is rare that you come across a such a good developer like Mr. Shivang. Working with him has been pure pleasure. He has a variety of traits and characteristics that encourage his team members to follow him. Being confident in his abilities, he possesses exceptional organizational skills. He is respectful, honest, fair and believes in open communication. I recommend Mr.Shivang Mishra highly as I know that he will never let anyone down.",
  },
  {
    avatar: AVTR2,
    name: "Chak Saranathan",
    review:
      "I had the privilege of working with Shivang Mishra over the last couple of months and he has proven that he is a skilled iOS developer. Shivang is a smart and charismatic personality that is enjoyable to work with and a great guy to have around. The quality that stood out to me the most about Shivang during our time working together is his dedicated work ethic. When the going gets tough, he does not hesitate to roll up his sleeves and work hard as well as efficiently. His work is thorough and well thought out, and he learns to adapt quickly under pressure and stressed deadlines. Shivang’s strong technical skills and welcoming personality makes him a great asset for any team that is looking to build a crisp and comprehensive product.",
  },
  {
    avatar: AVTR4,
    name: "Walid Mahiri",
    review:
      "Great partnership even if sometime we had difficult time, we always manage to find the right solution.",
  },
  {
    avatar: AVTR3,
    name: "Sunil Hebbar",
    review:
      "Shivang is a hard working, charismatic, and attention to detail driven developer. He has outperformed all of my expectations and continues to excel in all dimensions of iOS development. His commitment to excellence is demonstrated through his vast knowledge base and exquisite work ethic.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
