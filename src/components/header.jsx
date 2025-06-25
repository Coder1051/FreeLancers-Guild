import React from 'react'
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import './css/header.css';

const Header = () => {
  return (
    <div className="header-sections mt-5">
      <div className="container">
        <div className="top-bar-content mt-3">
          <div className="contact-infos">
            <span className="contact-itemss">
              <Phone size={16} />
              Call us +923335722463
            </span>
            <span className="contact-itemss">
              <Mail size={16} />
              freelancersguild.rm@gmail.com
            </span>
          </div>
          <div className="social-linkss">
            <a href="https://www.instagram.com/free_lancers_guild?igsh=aGx4N21sd3JicHRt" target="_blank" className="social-link" aria-label="Instagram">
              <FaInstagram size={16} />
            </a> 
            <a href="" className="social-link" target="_blank" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="https://www.facebook.com/share/1CYxALQz6U/" target="_blank" className="social-link" aria-label="Facebook">
              <FaFacebook size={16} />
            </a>
            <a href="https://www.tiktok.com/@free.lancers.guild?_t=ZS-8xCAWpHXC91&_r=1" target="_blank" className="social-link" aria-label="Tiktok">
              <FaTiktok size={16} />
            </a>
            <a href="https://www.linkedin.com/company/free-lancers-guild/" target="_blank" className="social-link" aria-label="Linkedin">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header