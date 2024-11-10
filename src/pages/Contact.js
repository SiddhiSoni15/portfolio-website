import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xnnqvnjr" method="POST">
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
