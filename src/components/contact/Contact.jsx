import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9cdufof",
        "template_9nip62q",
        form.current,
        "prQqyrqWGhM7-x8Oc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>office.shivang@gmail.com</h5>
            <a href="mailto:office.shivang@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Shivang Mishra</h5>
            <a
              href="https://www.linkedin.com/in/shivang-mishra-46b440a9/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9911616858</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9911616858"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
