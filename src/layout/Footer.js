import React from 'react';
import LOGO from '../assets/smallLogo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-text">
          <img src={LOGO} alt="small Little Lemon Logo" className="footer-logo" />
          <p><span>Little Lemon</span> | A cozy Mediterranean haven nestled in the heart of Chicago. At Little Lemon, we pride ourselves on bringing you a blend of authentic flavors and modern dining in a warm, inviting atmosphere. Join us for a unique dining experience where each meal is a celebration of culinary delight.</p>
        </div>
        <div className="footer-contact">
          <p><strong>Address:</strong> 1234 Windy Lane, Chicago, IL | <strong>Phone:</strong> (312) 555-0173</p>
        </div>
        {/* <div className="social-media-links">
          <p>Follow us on social media to keep up with the latest news and exclusive offers: <strong>Instagram</strong> | <strong>Facebook</strong></p>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div> */}
        <div className="footer-hours">
          <p><strong>Hours of Operation:</strong></p>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
        </div>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
