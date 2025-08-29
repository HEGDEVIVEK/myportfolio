import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "../scss/Contact.scss"


export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Let's discuss your next project or just say hello!
      </p>

      <div className="contact">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>vivekshegde2001@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+1 (210)-544-1384</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>San Antonio, TX, USA</span>
          </div>

          <h3 className="follow-title">Follow Me</h3>

          <div className="social-icons">
            <a href="https://github.com/HEGDEVIVEK" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vivek-s-hegde-2001/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h3>Send Message</h3>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Message</label>
            <textarea placeholder="Your message..." rows="5"></textarea>

            <button type="submit">
              <span></span> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
