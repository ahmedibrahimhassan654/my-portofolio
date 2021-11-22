import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./contact.scss";
import emailjs from "emailjs-com";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5dk95ja",
        "template_iairygm",
        form.current,
        "user_u6AcvF80pkZElBY5O85vI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          toast(` Thanks, I'll reply ASAP : `);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(false);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
