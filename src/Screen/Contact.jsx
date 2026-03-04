import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-left">
          <h1>Contact <span>Us</span></h1>
          <p>
            Have questions or want to place a bulk order?
            Reach out to us and we will get back to you as soon as possible.
          </p>

          <div className="contact-info">
            <p><strong>Address:</strong> Safa Foods Medavakkam Chennai, Tamil Nadu</p>
            <p><strong>Phone:</strong> +91 8148300181</p>
            <p><strong>Email:</strong> yasher0304@gmail.com</p>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}