import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronUp, Heart } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './css/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              {/* Logo */}
              <Link to="/" className="logo">
                <span className="logo-text">
                  <span className="logo-f">F</span>ree<span className="logo-l">L</span>ancers
                </span>
                <span className="logo-subtitle">GUILD</span>
              </Link>
            </div>
            <p className="footer-desc mt-2">
              Empowering freelancers with premium courses and training programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-items">
                <Phone size={16} />
                <span>+923335722463</span>
              </div>
              <div className="contact-items">
                <Mail size={16} />
                <span>freelancersguild.rm@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-linkss">
              <a href="https://www.instagram.com/free_lancers_guild?igsh=aGx4N21sd3JicHRt" target="_blank" className="social-lin">
                <FaInstagram size={18} />
              </a>
              <a href="#" target="_blank" className="social-lin">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/share/1CYxALQz6U/" target="_blank" className="social-lin">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@free.lancers.guild?_t=ZS-8xCAWpHXC91&_r=1" target="_blank" className="social-lin">
                <FaTiktok size={18} />
              </a>
              <a href="https://www.linkedin.com/company/free-lancers-guild/" target="_blank" className="social-lin">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Freelancers Guild. Made with  <Heart size={15} className="heart" /> for freelancers.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button className="scroll-top" onClick={scrollToTop}>
        <ChevronUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;