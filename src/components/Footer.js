import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      
     

      <div className="footer-container">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/xvgrekew" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>

      <p> &copy; 2025 del.com</p>
    </div>
  );
}

export default Footer;
