import React, { useState } from "react";
import "./Contact.css";
import { GiBread } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, message });
  };
  return (
    <div className="cont">
      <div className="contactes">
        <h2>Our contacts</h2>
        <h3 className="info-title">If you have any questions contact us:</h3>
        <div className="contact-item">
          <p>
            <FaRegEnvelope className="our-contact" /> breadlikeinforms@gmail.com
          </p>
        </div>
        <div className="contact-item">
          <h3>We open every day from 7 am to 6 pm:</h3>
          <p>
            <GrMapLocation className="our-contact" /> 123 Mains St, Montreal,
            Quebec
          </p>
        </div>
        <div className="contact-item">
          <h3>We accept calls from 8 am to 5 pm:</h3>
          <p>
            <FaPhoneAlt className="our-contact" /> (514) 000-00-00
          </p>
        </div>
      </div>
      <div className="contacts">
        <h2>
          Contact us <GiBread className="breadd" />
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} required
          />
          <input
            type="email"
            placeholder="Your Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} required rows="5"
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
