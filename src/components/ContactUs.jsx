import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./styles/contact.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      // serv61atgice_bt
    //   service_ozgq3t1
    emailjs
      .sendForm('service_y24blyj', 'template_v59lbzf', form.current, {
        publicKey: 'KePPrQMuY5jskmxsE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successifuly")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
          <div className="form">
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
              <input type="submit" value="Send" />
              </div>
    </form>
  );
};
