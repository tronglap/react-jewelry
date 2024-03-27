import React from "react";
import emailjs from "emailjs-com";

const OrderInfo = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dofpxr",
        "template_xfe434c",
        e.target,
        "dU2mmYjB_UKNCCJmr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" />
      <input type="email" name="user_email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default OrderInfo;
