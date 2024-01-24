import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1E90FF' }}>
      <div className="container">
        <div className="left-section">
          <img src="/images/footer-logo.png" style={{width: '500px'}} alt="Logo" />
        </div>
        <div className="service-section">
          <p>SERVICE</p>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
        <div className="legals-section">
          <p>LEGALS</p>
          <ul>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Terms of User</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="social-section">
          <p>GET NEWS UPDATE</p>
          <ul>
            <li><a href="#"><img className='img-1' src="/images/FacebookFilled.png" alt="Facebook" /> Facebook</a></li>
            <li><a href="#"><img className='img-1' src="/images/TwitterSquareFilled.png" alt="Twitter" /> Twitter</a></li>
            <li><a href="#"><img className='img-1' src="/images/InstagramFilled.png" alt="Instagram" /> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container-fluit">
            <div className="copyright-section">
            <p>2023 Copyright. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
