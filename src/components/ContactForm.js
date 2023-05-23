import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zgxt269', 'template_y1mg7jz', form.current, 'i5KwLvAFQbM2SLQ8D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
}